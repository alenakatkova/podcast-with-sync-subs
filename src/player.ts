import "shikwasa/dist/style.css";
import "./style.css";
import { Chapter, Player } from "shikwasa";
import { ChapterAttributes } from "./types/ChapterAttributes";

Player.use(Chapter);

function initializePlayer(
  audioSrc: string,
  subtitles: ChapterAttributes[],
  fileName: string
) {
  const player = new Player({
    container: () => document.getElementById("player-container"),
    audio: {
      title: fileName,
      src: audioSrc,
      chapters: subtitles,
    },
  });
  player.el.setAttribute("data-show-chapter", true);
  player.el.setAttribute("data-extra", true);
}
export function showPlayer(
  playerElement: HTMLElement,
  audioSrc: string,
  subtitles: ChapterAttributes[],
  fileName: string
) {
  playerElement.style.display = "block";

  initializePlayer(audioSrc, subtitles, fileName);
}

export function hidePlayer(playerElement: HTMLElement) {
  playerElement.style.display = "none";
}
