import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() => logout({ returnTo: window.location.origin })}
      className="rounded bg-white py-2 px-4 text-center text-black hover:bg-gray-200"
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
