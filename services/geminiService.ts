import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { SYSTEM_INSTRUCTION } from '../constants';

const getClient = () => {
    // Ideally this should be handled via a proxy server to hide the key in production,
    // but for this frontend-only demo, we use the env variable directly as instructed.
    if (!process.env.API_KEY) {
        console.warn("API_KEY is not set in environment variables.");
        return null;
    }
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
    const ai = getClient();
    if (!ai) {
        return "Error: API Key missing. Please configure the environment.";
    }

    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: message,
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
            }
        });

        return response.text || "Sorry, I couldn't generate a response.";
    } catch (error) {
        console.error("Gemini API Error:", error);
        return "Sorry, I am having trouble connecting to the server right now.";
    }
};