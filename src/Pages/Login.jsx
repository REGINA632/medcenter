import React from "react";

import AuthForm from "../Components/Auth/AuthForm";
import { useAuth } from "../Contexts/AuthContextProvider";

const Login = () => {
  const { loginUser } = useAuth();
  return (
    <div>
      <AuthForm
        title={"Login"}
        btnText={"Login"}
        link={"/register"}
        linkText={"Dont have an account? Register!"}
        handleSave={loginUser}
      />
    </div>
  );
};

export default Login;
