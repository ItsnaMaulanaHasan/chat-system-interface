// file dummyData.ts
import { User } from "@/types";

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
