import type { FC } from "react";

import styles from "./layout.module.scss";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";

interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar className={styles.sidebar} />
      <main className={styles.main}>
        <Outlet />
        dasd
      </main>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Layout;
