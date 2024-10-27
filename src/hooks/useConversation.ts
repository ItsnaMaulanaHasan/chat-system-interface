"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
  const searchParams = useSearchParams();

  const conversationId = useMemo(() => {
    const id = searchParams.get("id");
    return id || "";
  }, [searchParams]);

  const isOpen = useMemo(() => !!conversationId, [conversationId]);

  return useMemo(
    () => ({
      isOpen,
      conversationId,
    }),
    [isOpen, conversationId]
  );
};

export default useConversation;
