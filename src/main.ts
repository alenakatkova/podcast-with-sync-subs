import { showPlayer, hidePlayer } from "./player";
import { initializeForm } from "./form.ts";
import { ChapterAttributes } from "./types/ChapterAttributes.ts";

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

const playerElement = document.getElementById("player-container");
if (playerElement) hidePlayer(playerElement);

function readFile(file) {
  return new Promise((resolve, reject) => {
    var reader = new FileReader();

    reader.onload = function (e) {
      var text = e.target.result;
      try {
        var parsedData = parseSRT(text); // Assuming customParse is your parsing function
        resolve(parsedData);
      } catch (error) {
        reject(error);
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
      // Call another function with parsedData
      showPlayer(playerElement, audioUrl, parsedData, fileName);
    })
    .catch((error) => {
      console.error("Error reading file:", error);
    });
}

initializeForm(tempOnSubmit);
