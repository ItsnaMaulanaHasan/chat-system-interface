/* eslint-disable @typescript-eslint/no-explicit-any */
// 

import { useMemo } from "react";
import { User } from "@/types";
import { currentUser } from "@/utils/dummyData";

const useOtherUser = (conversation: { users: User[] }) => {
  const otherUser = useMemo(() => {
    const otherUser = conversation.users.filter((user) => user.email !== currentUser.email);
    return otherUser[0];
  }, [conversation.users]);

  return otherUser;
};

export default useOtherUser;
