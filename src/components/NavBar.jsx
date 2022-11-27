import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <>
      <div className="mb-5 flex h-28 items-center justify-center bg-slate-800 p-2">
        <Link to="/" className="w-1/6 bg-slate-800">
          <img src="../src/images/pokesearch.png" />
        </Link>
      </div>
      <main>{props.children}</main>
    </>
  );
};

export default NavBar;
