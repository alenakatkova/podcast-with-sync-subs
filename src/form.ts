const form = document.getElementById("files-form");
const submitBtn = form?.querySelector('button[type="submit"]');
const audioInput = form?.querySelector(
  "input[name='audio']"
) as HTMLInputElement | null;
const subtitlesInput = form?.querySelector(
  "input[name='subtitle']"
) as HTMLInputElement | null;

export function initializeForm(
  onSubmitCallback: (
    audioBlob: Blob,
    subtitlesBlob: Blob,
    fileName: string
  ) => void
) {
  submitBtn?.addEventListener("click", (evt) => {
    evt.preventDefault();
    const audioFile = audioInput?.files?.[0];
    if (!audioFile) {
      alert("Please select an audio file.");
      return;
    }

    const subtitlesFile = subtitlesInput?.files?.[0];
    if (!subtitlesFile) {
      alert("Please select a subtitles file.");
      return;
    }

    onSubmitCallback(audioFile, subtitlesFile, audioFile.name);
  });
}
