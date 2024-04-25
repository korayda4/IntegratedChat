import { useState } from "react";
import { Button } from "antd";
import useStore from "../zustand/state";
import { supabase } from "../supaBase/supabaseClient";

const LoginForm = ({ showLoginForm, toggleForm, showMessage, setSignIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });



            if (!error && data) {
                
                let { data: userChatHistory, error } = await supabase
                    .from('userChatHistory')
                    .select("*")
                    .eq('userID', data.user.id)
                    console.log(userChatHistory);


        
                showMessage("success", "Logged in successfully")
                setSignIn(true);

                setTimeout(() => {
                    useStore.setState({ isLogin: true, userData: data.user });
                }, 1050);

            } else {
                showMessage("error", "Invalid email or password")
                console.error('Login error: Invalid email or password');
            }

        } catch (error) {
            console.error('Login error:', error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input
                    type="text"
                    placeholder="E-mail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                    style={{ outline: "none", minWidth: "100%" }}
                    type="text"
                    htmlType="submit"
                    loading={isLoading}
                    disabled={isLoading}
                >
                    {isLoading ? "" : "Login"}
                </Button>
                <div className="mobileSidebar">
                    <p>
                        {showLoginForm
                            ? "Don't have an account?"
                            : "Have an Account?"}
                        <Button
                            style={{ outline: "none", backgroundColor: "white" }}
                            type="link"
                            onClick={toggleForm}
                        >
                            {showLoginForm ? "Signup" : "Login"}
                        </Button>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;
