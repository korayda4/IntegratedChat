import React, { useState, useEffect } from 'react';
import { CheckCircleTwoTone } from '@ant-design/icons';
import './login.css';
import AuthForm from './AuthForm';
import SideBar from "./sideBar"

function LoginPage({ showMessage }) {
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [signIn, setSignIn] = useState(false);

  const toggleForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="container">
      <SideBar
        signIn={signIn}
        showLoginForm={showLoginForm}
        toggleForm={toggleForm}
      />
      <div className="card-container">
        {signIn ? (
          <div style={{ fontSize: "128px" }}>
            <CheckCircleTwoTone />
          </div>
        ) : (
          <AuthForm
            showLoginForm={showLoginForm}
            showMessage={showMessage}
            toggleForm={toggleForm}
            setSignIn={setSignIn}
          />
        )}
      </div>
    </div>
  );
}

export default LoginPage;
