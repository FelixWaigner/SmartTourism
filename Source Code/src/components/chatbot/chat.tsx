'use client';
import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChat } from "ai/react";
import { Grid } from "react-loader-spinner";
import Bubble from "@/components/chatbot/bubble";
import { welcomeMessage } from "@/lib/strings";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat();

  // Create a reference to the scroll area
  const scrollAreaRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    // Scroll to the bottom when the messages change
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTo({
        top: scrollAreaRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <Card className="w-[355px] -ml-16 bg-white">
      <CardHeader>
        <CardTitle className="text-lg">Chatbot</CardTitle>
        <CardDescription className=" leading-3">
          MalanGo Chatbot
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <ScrollArea
          ref={scrollAreaRef}
          className="h-[450px] overflow-y-auto w-full spacy-y-4 pr-4"
        >
          <Bubble
            message={{
              role: "assistant",
              content: welcomeMessage,
              id: "initialai",
            }}
          />
          {messages.map((message) => (
            <Bubble key={message.id} message={message} />
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center w-full space-x-2"
        >
          <Input
            placeholder="Type your message"
            value={input}
            onChange={handleInputChange}
          />
          <Button disabled={isLoading}>
            {isLoading ? (
              <div className="flex gap-2 items-center">
                <Grid
                  height={12}
                  width={12}
                  radius={5}
                  ariaLabel="grid-loading"
                  color="#fff"
                  ms-visible={true}
                />
                {"Loading..."}
              </div>
            ) : (
              "Send"
            )}
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}