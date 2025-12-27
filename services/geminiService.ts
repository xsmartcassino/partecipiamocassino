
import { GoogleGenAI, Type } from "@google/genai";
import { ChatMessage } from "../types";

const safeGetApiKey = () => {
  try {
    // @ts-ignore
    return (typeof process !== 'undefined' && process.env && process.env.API_KEY) ? process.env.API_KEY : "";
  } catch (e) {
    return "";
  }
};

export const generateChristmasGreeting = async (): Promise<{ title: string; message: string }> => {
  const apiKey = safeGetApiKey();
  const ai = new GoogleGenAI({ apiKey });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Genera un breve e caloroso messaggio di auguri natalizi in italiano da parte del gruppo civico 'Partecipiamo Cassino' rivolto a tutti i cittadini di Cassino. Il tono deve essere comunitario, inclusivo e gioioso. Restituisci un oggetto JSON con 'title' e 'message'.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            message: { type: Type.STRING }
          },
          required: ["title", "message"]
        }
      }
    });

    return JSON.parse(response.text);
  } catch (error) {
    console.error("Error generating greeting:", error);
    return {
      title: "Buone Feste da Partecipiamo Cassino",
      message: "Auguriamo a tutta la cittadinanza di Cassino un Natale sereno, pieno di calore e partecipazione."
    };
  }
};

export const getChatResponse = async (history: ChatMessage[], userMessage: string): Promise<string> => {
  const apiKey = safeGetApiKey();
  const ai = new GoogleGenAI({ apiKey });

  const systemInstruction = `Sei l'assistente virtuale natalizio di 'Partecipiamo Cassino', un gruppo civico di Cassino (FR). 
    Il tuo compito è spiegare il progetto 'Natale Insieme a Cassino'. 
    Punti chiave del progetto:
    1. Partecipazione: Invitiamo i cittadini a decorare insieme i quartieri.
    2. Solidarietà: Raccogliamo doni per le famiglie in difficoltà della città.
    3. Comunità: Organizziamo piccoli incontri nelle piazze per scambiare auguri.
    4. Trasparenza: Spieghiamo come i cittadini possono influenzare le scelte del comune.
    Tono: Cordiale, festivo, propositivo. Usa emoji natalizie. Se non sai qualcosa, invita a contattare info@partecipiamocassino.it.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        ...history.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        systemInstruction,
        temperature: 0.8,
      }
    });

    return response.text || "Scusami, ho avuto un piccolo intoppo natalizio. Puoi riprovare?";
  } catch (error) {
    console.error("Chat Error:", error);
    return "Ops! La neve ha bloccato i miei circuiti. Riprova tra poco! ❄️";
  }
};
