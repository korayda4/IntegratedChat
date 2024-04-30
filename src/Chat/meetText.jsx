import  formatMessage  from './formatMessage'; // formatMessage fonksiyonunu import edin
import typeText from './typeText';
import { useEffect, useState } from 'react';

const messageCreator = ({className,x,setCanType,meet,canType}) => {
    const [typingText, setTypingText] = useState("");

    useEffect(() => {
        if(className == "ai"){
            setTypingText(prevText => prevText + x[0]);
            typeText(x , { setCanType, setTypingText ,className})
        } 
    },[x,className])

    return(
        <>
            {!canType ? <h4 className="msg" >{className == "ai" ? typingText : formatMessage(x)} </h4>:
            <h4 className="msg" >{!typingText ? formatMessage(x):null}</h4>}
        </>
    )
}

export default messageCreator