import ChatsTop from './02a_chatsTop'
import MessageTab from './02b_messageTab'
import InputTab from './02c_inputTab'

const Chats = () => {
    return (
        <div id='chats'>
            <ChatsTop/>
            <MessageTab/>
            <InputTab/>
        </div>
    );
}

export default Chats;