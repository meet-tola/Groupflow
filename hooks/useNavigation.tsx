import { MessageSquare, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export const useNavigation = () => {
  const pathname = usePathname();

  const paths = useMemo(
    () => [
      {
        name: "Chats",
        href: "/chats",
        icon: <MessageSquare />,
        active: pathname.startsWith("/chats"),
      },
      {
        name: "Friends",
        href: "/friends",
        icon: <User />,
        active: pathname.startsWith("/friends"),
      },
    ],
    [pathname]
  );
  return paths;
};
