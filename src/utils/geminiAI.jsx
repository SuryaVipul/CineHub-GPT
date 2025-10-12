import { GoogleGenAI } from "@google/genai";
import { GEMINI_KEY } from "./constants";

const geminiai = new GoogleGenAI({
  apiKey: GEMINI_KEY, // This is the default and can be omitted
});

export default geminiai;
