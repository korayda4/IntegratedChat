import { useEffect } from "react";
import {  message } from 'antd';
import { AlignJustify,SquarePen } from 'lucide-react';
import useStore from '../zustand/state';
import LoginPage from "../LoginPage/loginPage";
import Message from "./message";
import IsLogin from "../supaBase/isLogin";

const Chat = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { isLogin,mobileSidebar } = useStore();

    const showMessage = (type, content) => {
        messageApi.open({
            type: type,
            content: content,
        });
    };

    useEffect(() => {
        IsLogin()
    },[]);
      

    return (
        <>
            {contextHolder}
            {isLogin ? (
                <div className="chat">
                    <div className="integratedAI">
                        <div onClick={() => {useStore.setState({ mobileSidebar:!mobileSidebar });}} className="menuIcon">
                            <AlignJustify />
                        </div>
                        <div className="version">
                            <h2>IntegratedChat</h2>
                        </div>
                        <div onClick={() => {useStore.setState({ mobileSidebar:!mobileSidebar });}} className="menuIcon">
                            <SquarePen style={{height:"20px"}}/>
                        </div>
                    </div>
                    <Message />
                </div>
            ) : (
                <LoginPage 
                    showMessage={showMessage}
                />
            )}
        </>
    );
}

export default Chat;
