import React, { useState, useEffect, useRef } from "react";
import { Button, Dropdown, FloatButton } from 'antd';
import userLogo from "../img/icons8-male-user-100.png"
import aiLogo from "../img/icons8-ai-100.png"
import MeetText from "./meetText";
import { supabase } from "../supaBase/supabaseClient";

const MeetVeriable = ({ meet, typingText }) => {
    const currentDate = new Date()


    return (
        <>
            {meet ? (meet.map((x, i) => {
                const items = [
                    {
                        key: '1',
                        label: (
                            <div className="date">
                                {currentDate.toDateString() + " " + currentDate.toLocaleTimeString()}
                            </div>
                        ),
                    }
                ];
                const className = i % 2 === 0 ? "me" : "ai";
                const isLastIndex = i === meet.length - 1;
                return (
                    <div key={i} className={className}>
                        {className === "me" ? (
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                placement="top"
                                trigger={['click', "hover"]}
                            >
                                <div style={{ cursor: "default" }} className="logo">
                                    <h3>You</h3>
                                    <img src={userLogo} alt="AI" />
                                </div>
                            </Dropdown>
                        ) : (
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                placement="top"
                                trigger={['click', "hover"]}
                            >
                                <div style={{ cursor: "default" }} className="logo">
                                    <img src={aiLogo} alt="AI" />
                                    <h3>IntegratedChat</h3>
                                </div>
                            </Dropdown>
                        )}

                        <MeetText 
                            typingText={typingText}
                            isLastIndex={isLastIndex}
                            x={x}
                        />
                    </div>
                );
            })) : "Nasıl Yardımcı Olabilirim?"}
        </>
    )
}

export default MeetVeriable;
