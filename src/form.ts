const form = document.getElementById("files-form");
const submitBtn = form?.querySelector('button[type="submit"]');
const audioInput = form?.querySelector(
  "input[name='audio']"
) as HTMLInputElement | null;

function handleFileUpload(file: File) {
  const reader = new FileReader();
  reader.onload = () => {
    const audioPlayer = document.querySelector(
      "audio[id='audioPlayer']"
    ) as HTMLAudioElement | null;
    if (audioPlayer) {
      audioPlayer.src = reader.result as string;
      audioPlayer.load();
    }
  };
  reader.readAsDataURL(file);
}

function onSubmit(evt: Event) {
  evt.preventDefault();
  const file = audioInput?.files?.[0];
  if (!file) {
    alert("Please select an audio file.");
    return;
  }
  handleFileUpload(file);
}

submitBtn?.addEventListener("click", onSubmit);
