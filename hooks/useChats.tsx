import { useParams } from "next/navigation";
import { useMemo } from "react";

export const useChat = () => {
  const param = useParams();

  const chatsId = useMemo(
    () => param?.chatsId || ("" as string),
    [param?.chatsId]
  );

  const isActive = useMemo(() => !!chatsId, [chatsId]);

  return {
    isActive,
    chatsId,
  };
};
