import Navbar from "@/components/shared/navbar/NavBar";

const AuthLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default AuthLayout;
