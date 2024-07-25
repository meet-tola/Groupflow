import React from 'react'

type Props = React.PropsWithChildren<{}>;

const ChatRoomLayout = ({ children }: Props) => {
    return (
        <div>
           {children} 
        </div>
    )
}

export default ChatRoomLayout
