import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/NavBar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
