import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {

   const chatProps = useMultiChatLogic('ab098671-5faa-429c-87e4-f63124278ef9', props.user.username, props.user.secret)
   return <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100%'}} />
         </div>
}

export default ChatsPage;