import { useState,useEffect } from "react"
import { Switch,Input,Button, Popconfirm  } from 'antd';
import { supabase } from "../../supaBase/supabaseClient";
import useStore from "../../zustand/state"
import userLogo from "../../img/icons8-male-user-100.png"
import { Settings2,TriangleAlert,Undo2 ,Pencil  ,LogIn,UserRoundPlus,ShieldCheck,Check   ,Trash ,ShieldQuestion    } from 'lucide-react';

const ModalConfigrator = ({ modalKey,showMessage }) => {
    const [inside, setInside] = useState(null);
    const { userData } = useStore();

    const deleteAccount = async () => {
        try {
            console.log(userData);
            const { data, error } = await supabase.auth.admin.deleteUser(
                userData.id
              )
    
            if (error) {
                showMessage("error","User Delete error");
                console.log(error);
            }else {

                showMessage("success","User Deleted successfuly");
            }
    
        } catch (error) {
            showMessage("error","User Delete error");
            console.log("user error",error);

        }
    }

    const acceptSettings = async (key,value) => {
        if(key == "email"){
            try {
                console.log(value);
                const { data, error } = await supabase.auth.updateUser({
                    email: value
                });
                console.log(data);
                if (error) {
                    showMessage("error","Email update error");
                } else {
                    showMessage("success","Email updated successfully");
                    useStore.setState({  userData: data.user });
                }
            } catch (error) {
                showMessage("error","Email update error");

            }
            setInsideContent(1)
        }else if ( key == "user") {
            try {
                console.log(value);
                const { data, error } = await supabase.auth.updateUser({
                    email: value
                });
                console.log(data);
                if (error) {
                    showMessage("error","User update error");

                } else {
                    showMessage("success","User updated successfully");

                    useStore.setState({  userData: data.user });
                }
            } catch (error) {
                showMessage("error","User update error");

            }
            setInsideContent(1)
        }else if (key == "password"){
            try {
                console.log(value);
                const { data, error } = await supabase.auth.updateUser({
                    password: value
                });
                console.log(data);
                if (error) {
                    showMessage("error","Password update error");

                } else {
                    showMessage("success","Password updated successfully");

                    useStore.setState({  userData: data.user });
                }
            } catch (error) {
                showMessage("error","Password update error");

            }
            setInsideContent(1)
        }
    }

    const openSettingModal = (key) => {
        if(key == "email"){
            setInside(
                <div className="modal">
                    <button >
                        <h5>
                            Change Email
                        </h5>
                        <span>
                            {userData?.email}
                            <Pencil />
                        </span>
                    </button>
                    <Input 
                        // value={inputValue} 
                        placeholder="New Email" 
                        required
                        onPressEnter={(event) => acceptSettings("email",event.target.value)}
                    />
                    <h5>Click enter to complete the change</h5>

                    <button onClick={() => setInsideContent(1)} >
                        <span>
                            Back To Menu
                            <Undo2 />
                        </span>
                    </button>
                </div>
            )
        }else if (key == "user") {
            setInside(
                <div className="modal">
                    <button >
                        <h5>
                            Change User
                        </h5>
                        <span>
                            {`${userData?.user_metadata.name} ${userData?.user_metadata.surName}`}
                            <Pencil />
                        </span>
                    </button>
                    <Input 
                        value={userData?.email} 
                        placeholder="Current Email" 
                        disabled
                    />
                    <form onSubmit={() => console.log("za")}>
                        <Input 
                            // value={inputValue} 
                            placeholder="New Name" 
                            required
                            style={{marginBottom:"12px"}}
                        />
                        <Input 
                            // value={inputValue} 
                            placeholder="New surname" 
                            required
                        />
                    </form>
                    <h5>Click enter to complete the change</h5>

                    <button onClick={() => setInsideContent(1)}>
                        <span>
                            Back To Menu
                            <Undo2 />
                        </span>
                    </button>
                </div>
            )
        }else if (key == "password") {
            setInside(
                <div className="modal">
                    <button >
                        <h5>
                            Change Password
                        </h5>
                        <span>
                            ****************
                            <Pencil />
                        </span>
                    </button>
                    <Input 
                        value={userData?.email} 
                        placeholder="Current Email" 
                        disabled
                    />
                    <Input 
                        // value={inputValue} 
                        placeholder="New Password" 
                        required
                        onPressEnter={(event) => acceptSettings("password",event.target.value)}
                    />
                    <h5>Click enter to complete the change</h5>

                    <button onClick={() => setInsideContent(1)}>
                        <span>
                            Back To Menu
                            <Undo2 />
                        </span>
                    </button>
                </div>
            )
        }
    }

    const setInsideContent = (modalKey) => {
        if (modalKey == 1) {
            setInside(
                <div className="modal">
                    <button>
                        <h5>
                            Image
                        </h5>
                        <span>
                            <img src={userLogo} alt="" />
                            <Settings2   />
                        </span>
                    </button>
                    <button onClick={() => openSettingModal("email")}>
                        <h5>
                            Email
                        </h5>
                        <span>
                            {userData?.new_email ? userData?.new_email:userData?.email}
                            <Settings2   />
                        </span>
                    </button>
                    <button onClick={() => openSettingModal("user")}>
                        <h5>
                            User
                        </h5>
                        <span>
                            {`${userData?.user_metadata?.name.charAt(0).toUpperCase() + userData?.user_metadata?.name.slice(1)} ${userData?.user_metadata?.surName.charAt(0).toUpperCase() + userData?.user_metadata?.surName.slice(1)}`}
                            <Settings2   />
                        </span>
                        
                    </button>

                    <button onClick={() => openSettingModal("password")}>
                        <h5>
                            Password
                        </h5>
                        <span>
                            **************
                            <Settings2   />
                        </span>
                        
                    </button>

                    <button>
                        <h5>
                            Plan
                        </h5>
                        <span>
                            Free
                            <Check />
                        </span>
                        
                    </button>
                    
                    <div className="footer">
                        <div className="info">
                            <h5>AUD</h5>
                            <span>
                                {userData.aud}
                                <ShieldCheck />
                            </span>
                        </div>
                        <div className="info">
                            <h5>Last signIn</h5>
                            <span>
                                {userData.last_sign_in_at.slice(0,10)}
                                <LogIn />
                            </span>
                        </div>
                        <div className="info">
                            <h5>Created</h5>
                            <span>
                                {userData.created_at.slice(0,10)}
                                <UserRoundPlus />
                            </span>
                        </div>
                    </div>
                    <Popconfirm
                        title="Delete Account?"
                        description="Are you sure to delete account?"
                        okText="Yes"
                        cancelText="No"
                        onConfirm={deleteAccount}
                    >
                        <button style={{color:"red"}}>Delete my account</button>
                    </Popconfirm>
                    
                </div>
            );
        } else if (modalKey === 2) {
            setInside(
                <div className="modal">
                    <button >
                        <h5>
                            Chat History
                        </h5>
                        <span style={{color:"red"}}>
                            Delete Chat History
                            <Trash    />
                        </span>
                    </button>
                    <button >
                        <h5>
                            Theme
                        </h5>
                        <span>
                            Light Mode
                            <Switch size="small" defaultChecked />
                        </span>
                    </button>
                    <button >
                        <h5>
                            Priority Release
                        </h5>
                        <span>
                            Trial versions
                            <Switch size="small" defaultChecked />
                        </span>
                    </button>
                    <button >
                        <h5>
                            Creating AI Images
                        </h5>
                        <span>
                            Ask admin for permission
                            <ShieldQuestion />
                        </span>
                    </button>
                </div>
            );
        } else if( modalKey === 3) {
            setInside(
                <div className="modal">
                    <button >
                        <h5>
                            Free Plan
                        </h5>
                        <span style={{color:"green"}}>
                            Selected
                            <Check />
                        </span>
                    </button>
                    <button >
                        <h5>
                            Basic Plan
                        </h5>
                        <span>
                        Out of use
                        <TriangleAlert />
                        </span>
                    </button>
                    <button >
                        <h5>
                            Advanced Plan
                        </h5>
                        <span>
                            Out of use
                            <TriangleAlert />
                        </span>
                    </button>
                    <button >
                        <h5>
                            Team Plan
                        </h5>
                        <span>
                            Out of use
                            <TriangleAlert />
                        </span>
                    </button>
                </div>
            );
        }else {
            setInside(
                <div className="modal">
                    <button >
                        <h5>
                            Notification
                        </h5>
                        <span style={{color:"green"}}>
                            You not have notification
                            <Check />
                        </span>
                    </button>
                    
                </div>
            )
            
        }
    };

    useEffect(() => {
        setInsideContent(modalKey);
    }, [modalKey]);

    return (
        <>
            {inside}
        </>
    )
}

export default ModalConfigrator
