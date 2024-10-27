import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

export default function ConversationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Sidebar>
      <div className="h-full">
        <React.Suspense>{children}</React.Suspense>
      </div>
    </Sidebar>
  );
}
