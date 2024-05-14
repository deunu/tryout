import { NextResponse } from "next/server";
import OpenAI from "openai";


export async function POST(request) {

    const openai = new OpenAI({
        apiKey: "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"
    })

    //Grabbing the user's input
    const params = await request.json();

    //Passing it to Chat GPT API
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "Please answer my questions"
            },
            {
                role: "user",
                content: params.prompt //string that the user passes in
            }
        ],
        temperature: 0,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })

//Send our response to the frontend    
return NextResponse.json(response);
}
