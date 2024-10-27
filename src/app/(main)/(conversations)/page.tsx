/* eslint-disable @typescript-eslint/no-explicit-any */
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
    fetch("https://gist.githubusercontent.com/ItsnaMaulanaHasan/bf52fe21edf9b38595747bb2c97aacce/raw/e15d99340df61a782730da640ad022140e120f03/chat-data.json")
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
