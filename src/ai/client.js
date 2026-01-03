import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateAIContent(prompt) {
  try {
    const response = await openai.chat.completions.create({
      model: process.env.AI_MODEL || "gpt-4-turbo-preview",
      messages: [
        { 
          role: "system", 
          content: "Você é um professor especialista em concursos públicos brasileiros, focado na banca CEBRASPE. Sua linguagem é técnica, precisa e baseada estritamente na bibliografia informada." 
        },
        { role: "user", content: prompt }
      ],
      temperature: 0.3,
    });
    return response.choices[0].message.content;
  } catch (error) {
    console.error("Erro na chamada da IA:", error);
    return "Erro ao gerar conteúdo.";
  }
}