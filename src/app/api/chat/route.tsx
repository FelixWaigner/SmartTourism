import { OpenAIStream, StreamingTextResponse } from "ai";
import { welcomeMessage } from "@/lib/strings";


export const runtime = 'edge';

export async function POST(req: Request){
    // Extract the messages from the body of the request
    const { messages } = await req.json();

    // question is on the last message
    const question = messages[messages.length - 1].content;
    messages.pop();

    const url = 'https://127.0.0.1:5000';

    const data = {
        api_key: process.env.MENDABLE_API_KEY,
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const conversation_id = await response.json();

    const history = [];
    for (let i = 0; i < messages.length; i += 2){
        history.push({
            prompt: messages[i].content,
            response: messages[i + 1].content,
        });
    }

    history.unshift({
        prompt: '',
        response: welcomeMessage,
    });

    const stream = OpenAIStream(response)


    return new StreamingTextResponse(stream);
}