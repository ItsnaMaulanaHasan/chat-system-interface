import Sidebar from "@/components/sidebar/Sidebar";
import UserList from "@/components/users/UserList";
import { dummyUsers } from "@/utils/dummyData";

export default function Userslayout({ children }: { children: React.ReactNode }) {
  return (
    <Sidebar>
      <div className="h-full">
        <UserList items={dummyUsers} />
        {children}
      </div>
    </Sidebar>
  );
}
