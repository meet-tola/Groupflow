import React from 'react'
import ItemList from '@/components/shared/item-list/ItemList';


type Props = React.PropsWithChildren<{}>;

const ChatsLayout = ({ children }: Props) => {
    return (
        <>
        <ItemList title='Chats'>
        page
      </ItemList>
           {children} 
        </>
    )
}

export default ChatsLayout
