"use client";

import ChatInput from "./chat-input";
import ChatHistory from "./chat-history";

import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [loadingAI, setLoadingAI] = useState(false);
  const chatContainerRef = useAutoScroll(messages);
  return (
    <div className="relative h-full">
      <div
        className="scrollbar-hidden h-full space-y-5 overflow-y-scroll scroll-smooth p-5 pb-32"
        ref={chatContainerRef}
      >
        <ChatHistory messages={messages} />
      </div>

      <div className="absolute bottom-5 w-full px-5">
        <ChatInput
          setMessages={setMessages}
          messages={messages}
          loadingAI={loadingAI}
          setLoadingAI={setLoadingAI}
        />
      </div>
    </div>
  );
}

import { useEffect, useRef } from "react";

export const useAutoScroll = (dependency: any) => {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [dependency]);

  return chatContainerRef;
};
