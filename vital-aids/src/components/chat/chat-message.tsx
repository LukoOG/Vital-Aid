import React from "react";
import Markdown from "react-markdown";

type Props = {
  role: string;
  content: string;
};

export default function ChatMessage({ role, content }: Props) {
  return role === "user" ? (
    <UserMessage content={content} />
  ) : (
    <AIMessage content={content} />
  );
}

export function UserMessage({ content }: any) {
  return (
    <div className="flex w-full justify-end">
      <p className="bg-ble-500 max-w-[50%] rounded-xl bg-blue-800 p-3 text-white">
        {content}
      </p>
    </div>
  );
}

export function AIMessage({ content }: any) {
  return (
    <div className="flex items-start gap-5">
      <Markdown>{content}</Markdown>
    </div>
  );
}
