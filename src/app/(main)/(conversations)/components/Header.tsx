/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Avatar from "@/components/Avatar";
import Link from "next/link";
import { useMemo, useState } from "react";
import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";
import ProfileDrawer from "./ProfileDrawer";

interface HeaderProps {
  conversation?: any;
}

const Header: React.FC<HeaderProps> = ({ conversation }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const statusText = useMemo(() => {
    return conversation?.room?.participant?.length > 2 ? `${conversation?.room?.participant?.length} members` : "Active";
  }, [conversation]);

  return (
    <>
      <ProfileDrawer data={conversation} isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <div className="bg-white w-full flex border-b-[1px] sm:px-4 py-4 lg:px-6 justify-between items-center shadow-sm">
        <div className="flex gap-3 items-center">
          <Link className="lg:hidden block text-sky-500 hover:text-sky-600 transition cursor-pointer" href="/conversations">
            <HiChevronLeft size={32} />
          </Link>
          <Avatar user={conversation} />
          <div className="flex flex-col">
            <div>{conversation.room.name}</div>
            <div className="text-sm font-light text-neutral-500">{statusText}</div>
          </div>
        </div>
        <HiEllipsisHorizontal size={32} onClick={() => setDrawerOpen(true)} className="text-sky-500 cursor-pointer hover:text-sky-600 transition" />
      </div>
    </>
  );
};

export default Header;
