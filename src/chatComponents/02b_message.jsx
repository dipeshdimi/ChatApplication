import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
    const { curUser } = useContext(AuthContext);
    const { data } = useContext(ChatContext);

    // To prevent blank messages
    const [blank, setblank] = useState("none");
    useEffect(()=>{
        if(message.text==="")
            setblank("none");
        else
            setblank("block");
    }, [message.text]);
  
    const ref = useRef();
  
    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);
  
    // console.log(message);
    return (
        <div
            ref={ref}
            className={`message ${message.senderId === curUser.uid && "owner"}`}
        >
            <div className="messageInfo">
                <img
                    src={ message.senderId === curUser.uid ? curUser.photoURL : data.user.photoURL} alt=""
                />
                <span>{message.date.toDate().toLocaleDateString()}</span>
                <span>{message.date.toDate().toLocaleTimeString()}</span>
                {/* <span>{message.date.toDate()}</span> */}
                {/* <span>{message.date.toDate().getDate()}/{message.date.toDate().getMonth()}/{message.date.toDate().getFullYear()}</span> */}
                {/* <span>{moment(new Date('Wed Feb 27 2019 11:11:16 GMT+0530 (India Standard Time)')).format('DD-MMM-YYYY')}</span> */}
            </div>
            <div className="messageContent">
                {message.text && <p style={{display: blank}}>{message.text}</p>}
                {message.img && <img src={message.img} alt="" />}
                {message.voiceMsg && <audio id="audio" controls><source src={message.voiceMsg} type="video/webm"/> </audio>}
                {message.videoMsg && <video id="video" controls><source src={message.videoMsg} type="video/webm"/> </video>}
            </div>
        </div>
    );
  };

export default Message;