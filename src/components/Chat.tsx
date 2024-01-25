"use client";

import { useChat } from "ai/react";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex items-center justify-center h-screen bg-slate-50 shadow">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Chat AI</CardTitle>
          <CardDescription>
            Using Vercel AI SDK to create a chatbot.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[600px] w-full pr-4">
            {messages.map((message) => {
              return (
                <div
                  key={message.id}
                  className="flex gap-3 text-sm text-slate-700 bg-slate-200 p-3 rounded-lg mt-3"
                >
                  {message.role === "user" && (
                    <Avatar>
                      <AvatarFallback>FCT</AvatarFallback>
                      <AvatarImage src="https://github.com/fernando-tiburcio.png" />
                    </Avatar>
                  )}
                  {message.role === "assistant" && (
                    <Avatar>
                      <AvatarFallback>GPT</AvatarFallback>
                      <AvatarImage src="https://github.com/openai.png" />
                    </Avatar>
                  )}
                  <p>
                    <span className="block font-bold text-slate-700">
                      {message.role === "user" ? "Usuário: " : "AI: "}
                    </span>
                    {message.content}
                  </p>
                </div>
              );
            })}
          </ScrollArea>
        </CardContent>
        <CardFooter>
          <form onSubmit={handleSubmit} className="w-full flex gap-2">
            <Input
              placeholder="How can I help you?"
              value={input}
              onChange={handleInputChange}
            />
            <Button type="submit">Send</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
