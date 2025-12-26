
import { GoogleGenAI, Type } from "@google/genai";

// Funzione sicura per recuperare la chiave API senza mandare in crash l'app
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

    const data = JSON.parse(response.text);
    return data;
  } catch (error) {
    console.error("Error generating greeting:", error);
    return {
      title: "Buone Feste da Partecipiamo Cassino",
      message: "Auguriamo a tutta la cittadinanza di Cassino un Natale sereno, pieno di calore, partecipazione e speranza per il futuro della nostra città."
    };
  }
};
