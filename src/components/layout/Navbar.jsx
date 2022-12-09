import { Link } from "react-router-dom";
import { useState } from "react";
import LoginButton from "../buttons/login";
import LogoutButton from "../buttons/logout";
import LoginButtonMobile from "../buttons/login-mobile";
import LogoutButtonMobile from "../buttons/logout-mobile";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../../images/pokesearch.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SearchBox from "../SearchBox";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const { isAuthenticated } = useAuth0();

  const toggleNav = () => setNav(!nav);

  return (
    <nav className="fixed z-10 h-[80px] w-screen bg-gray-900 drop-shadow-lg">
      <div className="flex h-full w-full items-center justify-between px-2">
        <div className="flex items-center">
          <Link to="/">
            <img src={Logo} className="mr-4 w-[150px] md:w-[100px]" />
          </Link>
          <ul className="hidden text-white md:flex">
            <li className="p-4">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4">
              <Link to="/about">About</Link>
            </li>
            <li className="p-4">
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
          <SearchBox />
        </div>
        <div className="hidden pr-4 md:flex">
          {!isAuthenticated && <LoginButton />}
          {isAuthenticated && <LogoutButton />}
        </div>
        <div className="md:hidden" onClick={toggleNav}>
          {!nav ? (
            <Bars3Icon className="w-8 cursor-pointer text-white" />
          ) : (
            <XMarkIcon className="w-8 cursor-pointer text-white" />
          )}
        </div>
      </div>

      <ul
        className={
          !nav ? "hidden" : "absolute w-screen bg-gray-900 px-8 md:hidden"
        }
      >
        <Link to="/">
          <li className="w-full border-b-2 border-gray-200 p-4 text-white hover:bg-slate-800">
            Home
          </li>
        </Link>
        <Link to="/about">
          <li className="w-full border-b-2 border-gray-200 p-4 text-white hover:bg-slate-800">
            About
          </li>
        </Link>
        <Link to="/profile">
          <li className="w-full border-b-2 border-gray-200 p-4 text-white hover:bg-slate-800">
            Profile
          </li>
        </Link>
        <div className="my-4 flex flex-col">
          {!isAuthenticated && <LoginButtonMobile />}
          {isAuthenticated && <LogoutButtonMobile />}
        </div>
      </ul>
    </nav>
  );
}
