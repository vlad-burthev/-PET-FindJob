import type { FC } from "react";

import styles from "./sidebar.module.scss";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  className: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  return (
    <aside className={`${styles.sidebar} ${className}`}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={"/"}
            >
              <span
                className={`${styles["link-icon"]} ${styles["link-icon__home"]}`}
              ></span>
              <span
                className={`${styles["link-name"]} ${styles["link-name__home"]}`}
              >
                Home
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={"/vacancies"}
            >
              <span
                className={`${styles["link-icon"]} ${styles["link-icon__vacancies"]}`}
              ></span>
              <span
                className={`${styles["link-name"]} ${styles["link-name__vacancies"]}`}
              >
                Vacancies
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={"/my-jobs"}
            >
              <span
                className={`${styles["link-icon"]} ${styles["link-icon__my-jobs"]}`}
              ></span>
              <span
                className={`${styles["link-name"]} ${styles["link-name__my-jobs"]}`}
              >
                My Jobs
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : "")}
              to={"/about"}
            >
              <span
                className={`${styles["link-icon"]} ${styles["link-icon__about"]}`}
              ></span>
              <span
                className={`${styles["link-name"]} ${styles["link-name__about"]}`}
              >
                About
              </span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
