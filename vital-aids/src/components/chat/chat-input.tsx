"use client";

import { SendHorizonal } from "lucide-react";
import { getFirstAid } from "@/lib/context/getFirstAid";
import React, { useState } from "react";
import { useToast } from "../ui/use-toast";
import { Message } from "@/lib/types";
import TextareaAutosize from "react-textarea-autosize";

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
    const currentText = textInput;
    setTextInput("");

    const oldMessages = messages;

    setMessages((prevMessages: any) => [
      ...prevMessages,
      { role: "user", parts: [{ text: textInput }] },
    ]);

    try {
      const result = await getFirstAid(messages, currentText);
      
      if (!result) {
        setMessages(oldMessages);
        setTextInput(currentText);
        return toast({
          description: "Sorry we could not get response. Try again",
          duration: 1000,
        });
      }

      setMessages((prevMessages: any) => [
        ...prevMessages,
        { role: "model", parts: [{ text: result }] },
      ]);
    } catch (error) {
      toast({
        description: "An error occurred. Please try again",
        variant: "destructive",
        duration: 1000,
      });
    } finally {
      setLoadingAI(false);
    }
  }

  return (
    // Wrapper div to center the form horizontally
    <div className="flex justify-center w-full">
      <form
        className="z-10 flex w-[720px] h-[45px] px-[22px] py-[7px] justify-between items-center rounded-[20px] border border-[#002177] bg-[#D9D9D9]"
        onSubmit={handleSubmit}
      >
        <TextareaAutosize
          className="w-full resize-none outline-none bg-transparent placeholder:text-[#002177] text-[#002177] text-sm"
          placeholder="Make a request"
          autoFocus
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          onKeyDown={handleKeyDown}
          maxRows={1}
          minRows={1}
        />

        <button
          disabled={loadingAI}
          type="submit"
          className="rounded-full bg-[#002177] p-2 text-white hover:bg-[#002177]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <SendHorizonal className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
