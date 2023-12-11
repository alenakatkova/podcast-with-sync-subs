import { showPlayer, hidePlayer } from "./player";
import { initializeForm } from "./form.ts";
import { ChapterAttributes } from "./types/ChapterAttributes.ts";

const playerElement = document.getElementById("player-container");
if (playerElement) hidePlayer(playerElement);

function srtTimeToSeconds(time: string): number {
  const [hours, minutes, rest] = time.split(":");
  const [seconds, ms] = rest.split(",").map(Number);
  return parseInt(hours) * 3600 + parseInt(minutes) * 60 + seconds + ms / 1000;
}

function parseSRT(data: string): ChapterAttributes[] {
  const subtitleBlocks = data.trim().split("\n\n");
  return subtitleBlocks.map((block) => {
    const lines = block.split("\n");
    const [, time, ...text] = lines;
    const [start, end] = time.split(" --> ");

    return {
      title: text.join(" "),
      startTime: srtTimeToSeconds(start),
      endTime: srtTimeToSeconds(end),
    };
  });
}

function readFile(file: Blob): Promise<ChapterAttributes[]> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      if (typeof e.target?.result === "string") {
        const text = e.target.result;
        try {
          const parsedData = parseSRT(text);
          resolve(parsedData);
        } catch (error) {
          reject(error);
        }
      } else {
        reject(new Error("File read did not return a string."));
      }
    };

    reader.onerror = function () {
      reject(reader.error);
    };

    reader.readAsText(file);
  });
}

function tempOnSubmit(audioBlob: Blob, subtitlesBlob: Blob, fileName: string) {
  console.log(audioBlob);

  const audioUrl = URL.createObjectURL(audioBlob);

  readFile(subtitlesBlob)
    .then((parsedData) => {
      if (playerElement) {
        showPlayer(playerElement, audioUrl, parsedData, fileName);
      } else {
        console.error("Player element not found");
      }
    })
    .catch((error) => {
      console.error("Error reading file:", error);
    });
}

initializeForm(tempOnSubmit);
