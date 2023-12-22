import React, { useState } from 'react'
import vidCall from '../pics/videoCall.png'
import { ChatContext } from "../context/ChatContext";
import { useContext } from "react";
import {
    collection,
    query,
    where,
    getDocs
} from "firebase/firestore";
import { myDB } from "../firebase";
import { async } from '@firebase/util';


const ChatsTop = () => {

    const { data } = useContext(ChatContext);
    console.log("GWEs");
    console.log(data.user);

    // const [userName, setUserName] = useState("");

    
    // const extractName = async()=>{
        
        // const q = query(
        //     collection(myDB, "users"),
        //     where("uid", "==", data.user.uid)
        // );
        // const querySnapshot = await getDocs(q);
        
        // console.log("Fsr");
        // querySnapshot.forEach((doc) => {
        //     setUserName(doc.data().username);
        // });
    // }

    return (
        <div className="chat">
            <div className="chatInfo">
                <span>
                    <img src={data.user?.photoURL}  alt=""/>
                    <span>{data.user?.username}</span>
                    {/* <span onLoad={extractName}>{userName}</span> */}
                </span>
                {/* <div className="chatIcons">
                    <img src={vidCall} alt="" />
                    <img src='https://www.pngkey.com/png/full/128-1280043_open-add-to-contact-icon.png' alt="" />
                    <img src='https://cdn4.iconfinder.com/data/icons/ios-web-user-interface-multicolor-vol-5/512/Continue_ellipsis_menu_more_options-512.png' alt="" />
                </div> */}
            </div>
      {/* <Messages />
      <Input/> */}
        </div>
    );
}

export default ChatsTop;