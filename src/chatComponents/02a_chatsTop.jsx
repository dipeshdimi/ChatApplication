import { ChatContext } from "../context/ChatContext";
import { useContext } from "react";
// import {
//     collection,
//     query,
//     where,
//     getDocs
// } from "firebase/firestore";
// import { myDB } from "../firebase";
// import { async } from '@firebase/util';


const ChatsTop = () => {

    const { data } = useContext(ChatContext);

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>
                    <img src={data.user?.photoURL}  alt=""/>
                    <span>{data.user?.username}</span>
                </span>
            </div>
      {/* <Messages />
      <Input/> */}
        </div>
    );
}

export default ChatsTop;