import React,{useState} from 'react';
import Modal from './modal';
import MaleIcon from "../../img/icons8-male-user-100.png"
import { UserOutlined,NotificationOutlined, SettingOutlined, LogoutOutlined, DollarOutlined} from '@ant-design/icons';
import { Dropdown,message } from 'antd';
import { supabase } from '../../supaBase/supabaseClient'; // Supabase istemcisini içe aktarın
import useStore from "../../zustand/state";

const LeftSideOptions = () => {
  const { isLogin, userData } = useStore();
  const [messageApi, contextHolder] = message.useMessage();
  const [modalTitle, setModalTitle] = useState(""); // Modal başlığı için bir durum değişkeni oluşturun
  const [modalVisible, setModalVisible] = useState(false); // Modalın görünürlüğünü kontrol etmek için bir durum değişkeni oluşturun
  const [modalKey, setModalKey] = useState(1); // Modalın görünürlüğünü kontrol etmek için bir durum değişkeni oluşturun

  const showMessage = (type, content) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

  const logOut = async () => {
    showMessage("loading", "Signing out");
    setTimeout(async () => {
      const { error } = await supabase.auth.signOut();
    }, 1300);
  };

  const openModal = (text,key) => {
    console.log(key);
    setModalKey(key)
    setModalTitle(text); 
    setModalVisible(true); 
  };

  const closeModal = () => {
    setModalVisible(false); 
  };

  const items = [
    {
      key: '1',
      label: (
        <div onClick={() => openModal("Notification")} className="option" data-option="Profile Settings">
          <NotificationOutlined />
          <p>Notification</p>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div onClick={() => openModal("Profile Settings",1)} className="option" data-option="Profile Settings">
          <UserOutlined />
          <p>Profile Settings</p>
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div onClick={() => openModal("General Settings",2)} className="option" data-option="General Settings">
          <SettingOutlined />
          <p>General Settings</p>
        </div>
      ),
    },
    {
      key: '4',
      label: (
        <div onClick={() => openModal("Billing",3)} className="option" data-option="Billing">
          <DollarOutlined />
          <p>Billing</p>
        </div>
      ),
    },
    {
      key: '5',
      label: (
        <div onClick={logOut} className="option" data-option="Log Out">
          <LogoutOutlined />
          <p>Log Out</p>
        </div>
      ),
    }
  ];

  return (
    <>
      {isLogin ? (
        <div className="leftSideOptions">
          {contextHolder}
          <Dropdown
            menu={{
              items,
            }}
            placement="top"
          >
            <div style={{ cursor: "default" }} className="profile">
              <img src={MaleIcon} alt="" />
              <div className="text">
                <h3>
                  {userData ? `${userData?.user_metadata?.name.charAt(0).toUpperCase() + userData?.user_metadata?.name.slice(1)} ${userData?.user_metadata?.surName.charAt(0).toUpperCase() + userData?.user_metadata?.surName.slice(1)}` : "Name Surname"}
                </h3>
                <h5 style={{color:"#7a7a7a"}}>
                  {userData?.email}
                </h5>
              </div>
            </div>
          </Dropdown>
        </div>
      ) : "NOT AUTH"}
      <Modal 
        title={modalTitle} 
        open={modalVisible} 
        onClose={closeModal} 
        modalKey={modalKey} 
      />
       
    </>
  )
}

export default LeftSideOptions;
