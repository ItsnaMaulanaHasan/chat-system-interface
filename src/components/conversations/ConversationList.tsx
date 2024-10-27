/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { clsx } from "clsx";
import { useState } from "react";
import { MdOutlineGroupAdd } from "react-icons/md";
import useConversation from "@/hooks/useConversation";
import ConversationBox from "./ConversationBox";
import GroupChatModal from "./GroupChatModal";

interface ConversationListProps {
  data: any;
  getSelectedChat: (data: any) => void;
}

const ConversationList: React.FC<ConversationListProps> = ({ data, getSelectedChat }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { conversationId, isOpen } = useConversation();

  const selectData = (chat: any) => {
    getSelectedChat(chat);
  };

  return (
    <>
      <GroupChatModal users={[]} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <aside className={clsx("fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200", isOpen ? "hidden" : "block w-full left-0")}>
        <div className="px-5">
          <div className="flex justify-between mb-4 pt-4">
            <div className="text-2xl font-bold text-neutral-800">Messages</div>
            <div onClick={() => setIsModalOpen(true)} className="rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer hover:opacity-75 transition">
              <MdOutlineGroupAdd size={20} />
            </div>
          </div>
          {data.map((item: any) => (
            <ConversationBox key={item.room.id} data={item} selected={conversationId === item.room.id} selectData={selectData} />
          ))}
        </div>
      </aside>
    </>
  );
};

export default ConversationList;
