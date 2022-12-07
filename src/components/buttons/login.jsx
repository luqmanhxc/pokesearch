import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="rounded bg-white py-2 px-4 text-center text-black hover:bg-gray-200"
    >
      Log In
    </button>
  );
};

export default LoginButton;
