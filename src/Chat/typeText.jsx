const typeText = (text,{setCanType,setTypingText,className}) => {
    
    
    let index = -1;
    const intervalId = setInterval(() => {
        index++;
        if (index !== 0) {
            setTypingText(prevText => prevText + text[index]);
        }
        if (index >= text.length) {
            clearInterval(intervalId);
            setTypingText("");
            className == "ai" ? setCanType(true):setCanType(false)
        }   
    }, 15);

}

export default typeText