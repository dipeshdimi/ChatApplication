import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { myDB } from "../firebase";
import { doc, onSnapshot, updateDoc, deleteField, firestore } from "firebase/firestore";


const Contacts = () => {
    
    const { data } = useContext(ChatContext);
    
    const [chats, setChats] = useState([]);
    
    const { curUser } = useContext(AuthContext);
    const { dispatch } = useContext(ChatContext);
    
    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(myDB, "conversation", curUser.uid), (doc) => {
                setChats(doc.data());
            });

            return () => {
                unsub();
            };
        };
        
        curUser.uid && getChats();
    }, [curUser.uid]);
    
    // Object.entries(chats)?.map((chat) => (
        //     console.log(chat[1])
        // ))
        // console.log("dni");
        // console.log(chats);
        // console.log(chats['FRQAyV7biqhY5JkmKwDsNbjqcXw2AbfiTf4QDIQpJaLriZlAfD8QwS23']['date']);
        // console.log("WFS");
        // console.log(curUser.uid);
        // console.log(data.chatId);
        
        const handleSelect = (clickedChatUserInfo) => {
            dispatch({ type: "CHANGE_USER", payload: clickedChatUserInfo });
            // clickedChatUserInfo contains the userInfo object i.e., chat[1].userInfo (as passed to the handleSelect function below) for the clicked conversation.
        };
        
        const handleDelete = async () => {
            var CHAT_ID = data.chatId;
            const chatRef = doc(myDB, "conversation", curUser.uid);
            try {
                await updateDoc(chatRef, {
                    [CHAT_ID]: deleteField()
                    // cht: firebase.firestore.FieldValue.delete()
                });
                console.log("Field deleted successfully");
            } catch (error) {
                console.error("Error deleting field: ", error);
            }
        }
        
        return (
            <div className='contactList'>
            { Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat) => (
                // { Object.entries(chats)?.map((chat) => (
                    <div
                    className='contacts'
                    key={chat[0]}
                    onClick={async (clickEvent) => {
                        handleSelect(chat[1].userInfo);
                        // clickEvent.target.style.backgroundImage = 'linear-gradient(-20deg, #494b54 0%, #585c70 100%)';
                        document.getElementById('inputSend').style.display = 'flex';

                        // await updateDoc(doc(myDB, "conversation", data.user.uid), {
                        //     [data.chatId + ".lastMessage"]: {
                        //         unread : false
                        //     }
                        // });
                    }}
                >
                    <div className="imageUnread">
                        <img src={chat[1].userInfo.photoURL} alt=""/>
                        {/* <span className="unread"></span> */}
                    </div>
                    <div className='contactsData'>
                        <p className="title">{chat[1].userInfo.username}</p>
                        <p>{chat[1].lastMessage?.text}</p>
                    </div>

                    <i className="material-icons" onClick={handleDelete}>delete</i>
                </div>
            ))}
        </div>
    );
}

export default Contacts;