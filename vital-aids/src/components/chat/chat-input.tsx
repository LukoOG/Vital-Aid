"use client";

import { Mic, SendHorizonal, X } from "lucide-react";
import { getFirstAid } from "@/lib/context/getFirstAid";
import React, { useState } from "react";
import { useToast } from "../ui/use-toast";
import { Message } from "@/lib/types";
import TextareaAutosize from "react-textarea-autosize";
// import Image from "next/image";

type Props = {
  setMessages: any;
  messages: Message[];
  setLoadingAI: any;
  loadingAI: boolean;
};

export default function ChatInput({
  setMessages,
  messages,
  loadingAI,
  setLoadingAI,
}: Props) {
  const [textInput, setTextInput] = useState("");
  const [imageInput, setImageInput] = useState<any>();
  const { toast } = useToast();

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.target.form.requestSubmit();
    }
  };

  async function handleSubmit(e: any) {
    e.preventDefault();

    if (!textInput)
      return toast({
        description: "Input is required",
        variant: "destructive",
        duration: 500,
      });

    setLoadingAI(true);
    let currentText = textInput;
    setTextInput("");

    const oldMessages = messages;

    setMessages((prevMessages: any) => [
      ...prevMessages,
      { role: "user", parts: [{ text: textInput }] },
    ]);

    // call ai and get response
    console.log(textInput);
    const result = await getFirstAid(messages, currentText);
    console.log("ere");
    console.log(result);

    if (!result) {
      setMessages(oldMessages);
      setTextInput(currentText);
      setLoadingAI(false);
      return toast({
        description: "Sorry we could not get response. Try again",
        duration: 1000,
      });
    }

    setMessages((prevMessages: any) => [
      ...prevMessages,
      { role: "model", parts: [{ text: result }] },
    ]);
    setTextInput("");
    setLoadingAI(false);
  }

  return (
    <form
      className="z-10 flex w-full flex-col items-start gap-3 rounded-md border-2 bg-white p-3"
      onSubmit={handleSubmit}
    >
      <TextareaAutosize
        className="w-full resize-none text-base outline-none md:bg-transparent"
        placeholder="Enter a prompt here"
        autoFocus={true}
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button className="hidden" type="submit"></button>

      <div className="flex w-full justify-between">
        <p></p>

        <div className="flex items-center gap-2 text-cyan-800">
          <button
            disabled={loadingAI}
            type="submit"
            className="rounded-full bg-black p-2 text-white"
          >
            <SendHorizonal className="h-4 w-4 cursor-pointer" />
          </button>
        </div>
      </div>
    </form>
  );
}
