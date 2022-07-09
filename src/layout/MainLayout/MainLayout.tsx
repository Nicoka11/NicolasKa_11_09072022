import { NavBar } from "../../components";
import { MainLayoutProps } from "./MainLayout.interface";

const MainLayout = ({ children }: MainLayoutProps) => {

  return (
    <>
      <NavBar />
      <main className="container">{children}</main>
    </>
  );
};

export default MainLayout;
