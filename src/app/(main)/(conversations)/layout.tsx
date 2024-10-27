import Sidebar from "@/components/sidebar/Sidebar";
import { Suspense } from "react";

export default function ConversationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <Sidebar>
        <div className="h-full">{children}</div>
      </Sidebar>
    </Suspense>
  );
}
