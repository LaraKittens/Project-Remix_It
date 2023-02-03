import axios from "axios";
import fs from "fs";

const API_KEY = "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";
const AUDIO_FILE = "../../../backend/public/Test.mp3";
const STYLE_PARAM = "Techno";

// Read the audio file and encode it as base64

const audioFile = fs.readFileSync(AUDIO_FILE, "base64");

// Send a request to the OpenAI API with the audio file and the desired music style

axios
  .post(
    "https://api.openai.com/v1/engines/music/jobs",
    {
      prompt: `Generate music in ${STYLE_PARAM} style`,
      engine: "music",
      max_tokens: 1024,
      n: 1,
      temperature: 0.5,
      styles: [STYLE_PARAM],
      audio_format: "mp3",
      audio: audioFile,
    },
    {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    }
  )
  .then((response) => {
    const generatedMusic = response.data.generated_music[0];
    fs.writeFileSync("generated_music.mp3", generatedMusic, "base64");
  })
  .catch((error) => {
    console.error(error);
  });
