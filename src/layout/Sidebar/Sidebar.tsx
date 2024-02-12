import type { FC } from "react";

import styles from "./sidebar.module.scss";

interface SidebarProps {
  className: string;
}

const Sidebar: FC<SidebarProps> = ({ className }) => {
  return <aside className={`${styles.sidebar} ${className}`}>sidebar</aside>;
};

export default Sidebar;
