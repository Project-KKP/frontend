import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';

const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI(configuration);

export async function POST(request) {
  const { query } = await request.json();

  const dataFilePath = path.join(process.cwd(), 'data/data.txt');
  const data = fs.readFileSync(dataFilePath, 'utf8');

  const response = await openai.completions.create({
    model: "text-davinci-003",
    prompt: `Answer the following query in Indonesian using the provided data: ${query}\n\nData: ${data}`,
    max_tokens: 150,
  });

  return new Response(JSON.stringify({ response: response.data.choices[0].text.trim() }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
