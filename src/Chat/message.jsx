import React, { useState, useEffect, useRef } from "react";
import ChatInput from "./chatInput";
import MeetVeriable from "./meet"
import fetchAI from "./fetchAI";
import updateChatHistory from "./updateChatHistory";

const Message = () => {
    const [typingText, setTypingText] = useState("");
    const [meet, setMeet] = useState([]);
    const [canType, setCanType] = useState(true);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
    }, [meet,typingText]);

    const handleSubmit = async (text,setInputValue) => {
        setCanType(false);
        setInputValue("")
        // document.activeElement.blur();
        console.log(meet);
        await fetchAI(text, { setMeet,setTypingText,setCanType,meet});
        // updateChatHistory(meet)
            
    };

    return (
        <>
            <div ref={contentRef} className="message">
                <MeetVeriable
                    meet={meet}
                    typingText={typingText}
                    setCanType={setCanType}
                />
            </div>
            
            <div className="ask">
                <ChatInput
                    meet={meet}
                    setMeet={setMeet}
                    canType={canType}
                    handleSubmit={handleSubmit}
                />
            </div>
            
        </>
    );
};

export default Message;
