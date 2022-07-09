import { NavBar } from "../../components";
import Footer from "../../components/Footer";
import { MainLayoutProps } from "./MainLayout.interface";
import styles from "./MainLayout.module.scss";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <NavBar />
      <main className={`container ${styles.main}`}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
