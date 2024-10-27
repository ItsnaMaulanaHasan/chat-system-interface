/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Avatar from "@/components/Avatar";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";
import VideoModal from "./VideoModal";
import PdfModal from "./PdfModal";

interface MessageBoxProps {
  data: any;
}

const MessageBox: React.FC<MessageBoxProps> = ({ data }) => {
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [pdfModalOpen, setPdfModalOpen] = useState(false);

  //this is current user email
  const currentUser = "hasanmaulana453@gmail.com";

  const isOwn = currentUser === data.sender;

  const container = clsx("flex gap-3 p-4", isOwn && "justify-end");

  const avatar = clsx(isOwn && "order-2");

  const body = clsx("flex flex-col gap-2", isOwn && "items-end");

  const message = clsx("text-sm w-fit overflow-hidden", isOwn ? "bg-sky-500 text-white" : "bg-gray-100", data?.type === "image" ? "py-0 px-0" : "rounded-full py-2 px-3");

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
          <ImageModal src={data?.message} isOpen={imageModalOpen} onClose={() => setImageModalOpen(false)} />
          <VideoModal src={data?.message} isOpen={videoModalOpen} onClose={() => setVideoModalOpen(false)} />
          <PdfModal src={data?.message} isOpen={pdfModalOpen} onClose={() => setPdfModalOpen(false)} />

          {data?.type === "image" ? (
            <Image onClick={() => setImageModalOpen(true)} alt="Image" height="200" width="200" src={data?.message} className="object-cover cursor-pointer hover:scale-110 transition translate" />
          ) : data?.type === "video" ? (
            <div onClick={() => setVideoModalOpen(true)} className="cursor-pointer text-blue-500 underline">
              View Video
            </div>
          ) : data?.type === "pdf" ? (
            <div onClick={() => setPdfModalOpen(true)} className="cursor-pointer text-blue-500 underline">
              View PDF
            </div>
          ) : (
            <div>{data?.message}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessageBox;
