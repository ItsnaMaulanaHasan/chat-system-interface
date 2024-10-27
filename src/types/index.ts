// import { Conversation, Message, User } from "@prisma/client";

// export type FullMessageType = Message & {
//   sender: User;
//   seen: User[];
// };

// export type FullConversationType = Conversation & {
//   users: User[];
//   message: FullMessageType[];
// };

export type User = {
  id: string;
  name: string;
  email: string;
  image: string;
};

export type FullMessageType = {
  id: string;
  body: string | null;
  image: string | null;
  createdAt: string;
  seen: User[];
  sender: User;
};

export type FullConversationType = {
  id: string;
  name: string | null;
  users: User[];
  isGroup: boolean;
  message: FullMessageType[];
};
