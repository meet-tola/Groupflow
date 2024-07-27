import SidebarWrapper from "@/components/shared/sidebar/SidebarWrapper";
import React from "react";

type Props = React.PropsWithChildren<{}>;

const ChatRoomLayout = ({ children }: Props) => {
  return <SidebarWrapper>{children}</SidebarWrapper>;
};

export default ChatRoomLayout;
