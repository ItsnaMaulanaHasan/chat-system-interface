/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useRef } from "react";
import MessageBox from "./MessageBox";

interface BodyProps {
  initialMessage?: any[];
}

const Body: React.FC<BodyProps> = ({ initialMessage }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [initialMessage]);

  return (
    <div className="flex-1 overflow-y-auto">
      {initialMessage?.map((message) => (
        <MessageBox key={message.id} data={message} />
      ))}
      <div ref={bottomRef} className="pt-24" />
    </div>
  );
};

export default Body;
