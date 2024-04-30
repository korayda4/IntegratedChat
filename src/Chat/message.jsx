import React, { useState, useEffect, useRef } from "react";
import ChatInput from "./chatInput";
import MeetVeriable from "./meet"
import fetchAI from "./fetchAI";

const Message = () => {
    const [meet, setMeet] = useState([]);
    const [canType, setCanType] = useState(true);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
    }, [meet]);

    const handleSubmit = async (text,setInputValue) => {
        setInputValue("")
        await fetchAI(text, {setCanType,setMeet,meet});
            
    };

    return (
        <>
            <div ref={contentRef} className="message">
                <MeetVeriable
                    meet={meet}
                    setCanType={setCanType}
                    canType={canType}
                />
            </div>
            
            <div className="ask">
                <ChatInput
                    meet={meet}
                    setMeet={setMeet}
                    setCanType={setCanType}
                    canType={canType}
                    handleSubmit={handleSubmit}
                />
            </div>
            
        </>
    );
};

export default Message;
