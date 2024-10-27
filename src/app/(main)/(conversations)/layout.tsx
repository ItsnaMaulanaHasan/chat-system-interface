import Sidebar from "@/components/sidebar/Sidebar";
import { Suspense } from "react";

export default function ConversationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Sidebar>
      <div className="h-full">
        <Suspense>{children}</Suspense>
      </div>
    </Sidebar>
  );
}
