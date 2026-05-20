import Navbar from "@/components/shared/navbar/NavBar";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default layout;
