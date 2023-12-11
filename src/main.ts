import { showPlayer, hidePlayer } from "./player";
import { initializeForm } from "./form.ts";
import { ChapterAttributes } from "./types/ChapterAttributes.ts";

const playerElement = document.getElementById("player-container");
if (playerElement) hidePlayer(playerElement);

function tempOnSubmit(
  str: string,
  chapters: ChapterAttributes[],
  fileName: string
) {
  console.log(str);
  showPlayer(playerElement, str, [], fileName);
}

initializeForm(tempOnSubmit);
