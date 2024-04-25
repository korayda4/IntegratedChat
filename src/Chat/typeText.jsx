const typeText = (text,{setCanType,setTypingText}) => {

    let index = -1;
    setTypingText(prevText => prevText + text[0]);
    const intervalId = setInterval(() => {
        index++;
        if (index !== 0) {
            setTypingText(prevText => prevText + text[index]);
        }
        if (index >= text.length) {
            clearInterval(intervalId);
            setTypingText("");
            setCanType(true);
        }
    }, 15);

}

export default typeText