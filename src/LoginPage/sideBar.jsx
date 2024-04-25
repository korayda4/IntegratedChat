import { Button } from "antd";

const SideBar = ({signIn,showLoginForm,toggleForm}) => {
    return (
      <div className="sidebar">
        <h1>Welcome!</h1>
        <p>
          {showLoginForm
            ? "Don't have an account? Sign up?"
            : "Have a Account?"}
          <Button
            style={{ outline: "none" }}
            type="link"
            onClick={toggleForm}
          >
            {showLoginForm ? "Signup" : "Login"}
          </Button>
        </p>
      </div>
    );
  }
  
  export default SideBar;
  