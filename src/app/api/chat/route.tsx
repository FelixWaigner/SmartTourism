import OpenAI from 'openai';
import { AIStream, OpenAIStream, StreamingTextResponse } from 'ai';
import { welcomeMessage } from '@/lib/strings';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


export async function POST(req: Request) {
    const { messages } = await req.json();
    // Create a chat completion using OpenAI
    const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        stream: true,
        messages,
    });

    // const response = new Response('This is a test text');

    // // Extract the messages from the body of the request
    // const { messages } = await req.json();

    // // question is on the last message
    // const question = messages[messages.length - 1].content;
    // messages.pop();

    // const url = 'https://en.wikipedia.org/wiki/Mount_Bromo';

    // const data = {};

    // const response = await fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(data)
    // });
    // console.log(response);

    const stream = OpenAIStream(response)


    return new StreamingTextResponse(stream);
}