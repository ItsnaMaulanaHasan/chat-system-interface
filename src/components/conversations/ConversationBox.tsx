/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import clsx from "clsx";
import Avatar from "../Avatar";

interface ConversationBoxProps {
  data: any;
  selectData: (data: any) => void;
  selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({ data, selectData, selected }) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`?id=${data.room.id}`);
    selectData(data);
  }, [data, router]);

  const lastMessage = useMemo(() => {
    const messages = data.comments || [];
    return messages[messages.length - 1];
  }, [data.comments]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.type === "image") {
      return "Sent an image";
    }

    if (lastMessage?.type === "document") {
      return "Sent an file";
    }

    if (lastMessage?.type === "text") {
      return lastMessage.message;
    }

    return "Started a conversation";
  }, [lastMessage]);

  return (
    <div onClick={handleClick} className={clsx("w-full relative flex items-center space-x-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer p-3", selected ? "bg-neutral-100" : "bg-white")}>
      <Avatar user={data} />
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <div className="flex justify-between items-center mb-1">
            <p className="text-md font-medium text-gray-900">{data.room.name}</p>
            {lastMessage?.createdAt && <p className="text-xs text-gray-400 font-light">{format(new Date(lastMessage.createdAt), "p")}</p>}
          </div>
          <p className={"truncate text-sm text-black font-medium"}>{lastMessageText}</p>
        </div>
      </div>
    </div>
  );
};

export default ConversationBox;
