"use client";

import Avatar from "@/components/Avatar";
import clsx from "clsx";
import { format } from "date-fns";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

interface MessageBoxProps {
  data: any;
  isLast?: boolean;
}

const MessageBox: React.FC<MessageBoxProps> = ({ data, isLast }) => {
  const [imageModalOpen, setImageModalOpen] = useState(false);

  //this is current user email
  const currentUser = "hasanmaulana453@gmail.com";

  const isOwn = currentUser === data.sender;

  const container = clsx("flex gap-3 p-4", isOwn && "justify-end");

  const avatar = clsx(isOwn && "order-2");

  const body = clsx("flex flex-col gap-2", isOwn && "items-end");

  const message = clsx("text-sm w-fit overflow-hidden", isOwn ? "bg-sky-500 text-white" : "bg-gray-100", "rounded-full py-2 px-3");

  return (
    <div className={container}>
      <div className={avatar}>
        <Avatar />
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-sm text-gray-500">{data?.sender}</div>
        </div>
        <div className={message}>
          <ImageModal src={data?.image} isOpen={imageModalOpen} onClose={() => setImageModalOpen(false)} />
          {data?.image ? <Image onClick={() => setImageModalOpen(true)} alt="Image" height="288" width="288" src={data?.image} className="object-cover cursor-pointer hover:scale-110 transition translate" /> : <div>{data?.message}</div>}
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
