import Sidebar from "@/components/sidebar/Sidebar";
import UserList from "@/components/users/UserList";
import { dummyUsers } from "@/utils/dummyData";
import { Suspense } from "react";

export default function Userslayout({ children }: { children: React.ReactNode }) {
  return (
    <Suspense>
      <Sidebar>
        <div className="h-full">
          <UserList items={dummyUsers} />
          {children}
        </div>
      </Sidebar>
    </Suspense>
  );
}
