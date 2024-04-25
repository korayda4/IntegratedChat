import LoginForm from "./loginForm"
import SignInForm from "./signinForm"

const loginForm = ({toggleForm,setSignIn,showLoginForm,showMessage}) => {
      // const { data, error } = await supabase
      //       .from('users')
      //       .select('*')
      //       .eq('email', email);
    return(
        <>
          {showLoginForm ? (
            <LoginForm
              toggleForm ={toggleForm}
              showLoginForm={showLoginForm}
              showMessage={showMessage}
              setSignIn={setSignIn}
            />
          ) : (
            <SignInForm
              toggleForm ={toggleForm}
              showLoginForm={showLoginForm}
              showMessage={showMessage}
              setSignIn={setSignIn}
            />
          )}
        </>
    )
}

export default loginForm