import TypeText from "./typeText";
import updateChatHistory from "./updateChatHistory";

const fetchAI = async (text,{setMeet,setCanType}) => {
    try {
        const url = 'https://chat-gpt26.p.rapidapi.com/';
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': 'aab97a10efmsh009a93e544d35cap14d640jsn2f33093793fd',
                'Host': 'chat-gpt26.p.rapidapi.com'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: text }]
            })
        };
        setCanType(false)
        const response = await fetch(url, options);
        const result = await response.json();

        if (result && result?.choices) {
            setMeet(prevMeet => [...prevMeet, result?.choices[0]?.message?.content]);
            setCanType(false)
        }else  {
            setMeet(prevMeet => [...prevMeet,"The integrated chat server is currently experiencing an LCL300 based request problem and chat creation has failed.\n\nMy developer will fix the server error as soon as possible!\n\n\nTo reach the development team:\n\nmenu > help or you can send an e-mail to koraydemirmc@gmail.com!\n\n\nError: LCL300 Chat creation capacity collapse / openAI"]);
        }

    } catch (error) {
        console.error("IntegratedChat 403 Forbidden", error);
    }
}

export default fetchAI