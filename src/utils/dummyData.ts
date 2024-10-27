// file dummyData.ts
import { FullConversationType, FullMessageType, User } from "@/types";

export const currentUser: User = {
  id: "1",
  name: "HasanMaulana",
  email: "current@example.com",
  image: "/images/avatar4.jpg",
};

export const dummyUsers: User[] = [
  {
    id: "1",
    name: "HasanMaulana",
    email: "current@example.com",
    image: "/images/avatar4.jpg",
  },
  {
    id: "2",
    name: "Alice",
    email: "alice@example.com",
    image: "/images/avatar1.jpg",
  },
  {
    id: "3",
    name: "Bob",
    email: "bob@example.com",
    image: "/images/avatar2.jpg",
  },
  {
    id: "4",
    name: "Charlie",
    email: "charlie@example.com",
    image: "/images/avatar3.jpg",
  },
];

export const dummyConversations: FullConversationType[] = [
  {
    id: "1",
    name: "Alice",
    users: [
      currentUser,
      {
        id: "2",
        name: "Alice",
        email: "alice@example.com",
        image: "/images/avatar1.jpg",
      },
    ],
    isGroup: false,
    message: [
      {
        id: "1",
        body: "Hey, how are you?",
        image: null,
        createdAt: new Date().toISOString(),
        seen: [],
        sender: {
          id: "2",
          name: "Alice",
          email: "alice@example.com",
          image: "/images/avatar1.jpg",
        },
      },
    ],
  },
  {
    id: "2",
    name: "Bob",
    users: [
      currentUser,
      {
        id: "3",
        name: "Bob",
        email: "bob@example.com",
        image: "/images/avatar2.jpg",
      },
    ],
    isGroup: false,
    message: [
      {
        id: "2",
        body: "Let's meet tomorrow!",
        image: null,
        createdAt: new Date().toISOString(),
        seen: [],
        sender: {
          id: "3",
          name: "Bob",
          email: "bob@example.com",
          image: "/images/avatar2.jpg",
        },
      },
    ],
  },
  {
    id: "3",
    name: "Project Team",
    users: [
      currentUser,
      {
        id: "4",
        name: "Charlie",
        email: "charlie@example.com",
        image: "/images/avatar3.jpg",
      },
      {
        id: "5",
        name: "David",
        email: "david@example.com",
        image: "/images/avatar2.jpg",
      },
    ],
    isGroup: true,
    message: [
      {
        id: "3",
        body: "Team meeting at 10 AM",
        image: null,
        createdAt: new Date().toISOString(),
        seen: [],
        sender: {
          id: "4",
          name: "Charlie",
          email: "charlie@example.com",
          image: "/images/avatar3.jpg",
        },
      },
    ],
  },
];

export const dummyMessages: FullMessageType[] = [
  {
    id: "1",
    body: "Hey there!",
    image: null,
    createdAt: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
    seen: [currentUser],
    sender: {
      id: "2",
      name: "Alice",
      email: "alice@example.com",
      image: "/images/avatar1.jpg",
    },
  },
  {
    id: "2",
    body: "Hi! How are you?",
    image: null,
    createdAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
    seen: [],
    sender: currentUser,
  },
];
