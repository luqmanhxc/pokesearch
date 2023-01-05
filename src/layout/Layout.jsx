import NavBar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
