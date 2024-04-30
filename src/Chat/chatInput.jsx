import { Input,Button  } from 'antd';
import { useState } from 'react';
const { Search } = Input;

function ChatForm ({ handleSubmit,canType,setMeet,setCanType}) {
    const [inputValue, setInputValue] = useState("");

    const onSearchLocal =  async (value) => {
        if(value) {  
            await setMeet(prevMeet => [...prevMeet, value])
            await handleSubmit(value,setInputValue)
        }
    }

    const handleChange = (event) => {
        
        setInputValue(event.target.value);
    };

    return(
        <div className="form">
            <Search
                className={`input ${canType}`}
                size="large"
                style={{outline:"none"}}
                type="text"
                onChange={canType ? handleChange : null}
                value={inputValue}
                placeholder={canType ? "What do you want to ask...":"AI - Writing ..."}
                loading={!canType}
                onSearch={canType ? onSearchLocal : null}
            />
        </div>
    )
}

export default ChatForm;
