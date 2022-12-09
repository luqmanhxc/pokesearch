import NavBar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      <main className="bg-slate-600 pt-20 pb-5">{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
