import { Button } from "antd";
import { useState } from "react";
import { supabase } from "../supaBase/supabaseClient";

const SignInForm = ({ showLoginForm, toggleForm, showMessage }) => {
  const [signUpData, setSignUpData] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      setIsLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        email_confirm: true,
        options: {
          data: {
            name: signUpData[0],
            surName: signUpData[1]
          }
        }
      });

      if (error) {
        console.error('Sign up error:', error.message);
        showMessage("warning","Please try again ")
      } else {
        
        const { data:userData, error } = await supabase
          .from('userChatHistory')
          .upsert([
            {  userID: data.user.id},
          ])

        
        showMessage("success","Successful Created User")
        toggleForm();
      }
    } catch (error) {
        console.error('Sign up error:', error.message);
    } finally {
        
        setIsLoading(false);
    }
  };

  return (
    <div className="signup">
      <h2>Signup</h2>
      <form onSubmit={handleSignUp} >
        <input
          type="email"
          placeholder="E-mail"
          required
          // value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          required
          // value={signUpData[0]}
          onChange={(e) => {
            const newData = [...signUpData];
            newData[0] = e.target.value;
            setSignUpData(newData);
          }}
        />
        <input
          type="text"
          placeholder="Surname"
          required
          // value={signUpData[1]}
          onChange={(e) => {
            const newData = [...signUpData];
            newData[1] = e.target.value;
            setSignUpData(newData);
          }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          // value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="billing">
          <h5>Billing</h5>
          <select
            // value={signUpData[2]}
            onChange={(e) => {
              const newData = [...signUpData];
              newData[2] = e.target.value;
              setSignUpData(newData);
            }}
          >
            <option value="free">Free</option>
          </select>
        </div>
        <Button
          style={{ outline: "none" }}
          type="text"
          onClick={handleSignUp}
          loading={isLoading}
        >
          Signup
        </Button>
        <div className="mobileSidebar">
          <p>
            {showLoginForm
              ? "Don't have an account?"
              : "Have a Account?"}
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
  );
};

export default SignInForm;
