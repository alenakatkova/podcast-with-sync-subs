import "shikwasa/dist/style.css";
import "./style.css";
import { Player, Chapter } from "shikwasa";

const EPISODE_NAME: string = "008「学校について！②」";

interface Chapter {
  title: string;
  startTime: number;
  endTime: number;
}

function srtTimeToSeconds(time: string): number {
  const [hours, minutes, rest] = time.split(":");
  const [seconds, ms] = rest.split(",").map(Number);
  return parseInt(hours) * 3600 + parseInt(minutes) * 60 + seconds + ms / 1000;
}

function parseSRT(data: string): Chapter[] {
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

Player.use(Chapter);
fetch(`${EPISODE_NAME}.srt`)
  .then((response) => response.text())
  .then((fileContent) => parseSRT(fileContent))
  .then((parsedSrt) => {
    // @ts-ignore
    const player = new Player({
      container: () => document.getElementById("player-container"),
      audio: {
        title: EPISODE_NAME,
        artist: "Unknown",
        // cover: "image.png",
        src: `${EPISODE_NAME}.mp3`,
        chapters: parsedSrt,
      },
    });
    player.el.setAttribute("data-show-chapter", true);
    player.el.setAttribute("data-extra", true);
  });
