"use client";

import useConversation from "@/hooks/useConversation";
import EmptyState from "@/components/EmptyState";
import ConversationList from "@/components/conversations/ConversationList";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";

const Home = () => {
  const { conversationId } = useConversation();

  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState({ room: {}, comments: [] });

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/asharijuang/23745f3132fa30e666db68d2bf574e4a/raw/5d556dbb9c2aea9fdf3e1ec96e45f62a88cea7b6/chat_response.json")
      .then((response) => response.json())
      .then((json) => setData(json.results));
  }, []);

  const getSelectedChat = (chat: any) => {
    setSelectedData(chat);
  };

  return (
    <>
      <ConversationList data={data} getSelectedChat={getSelectedChat} />
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          {conversationId ? (
            <>
              <Header conversation={selectedData} />
              <Body initialMessage={selectedData?.comments} />
              <Form />
            </>
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
