import { showPlayer, hidePlayer } from "./player";
import { initializeForm } from "./form.ts";
import { ChapterAttributes } from "./types/ChapterAttributes.ts";

const playerElement = document.getElementById("player-container");
if (playerElement) hidePlayer(playerElement);

setTimeout(() => {
  showPlayer(playerElement, "", []);
}, 3000);

function tempOnSubmit(str: string, chapters: ChapterAttributes[]) {
  console.log(str);
}

initializeForm(tempOnSubmit);
