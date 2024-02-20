import type { FC } from "react";
import styles from "./footer.module.scss";

interface FooterProps {
  className: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`${styles.footer} ${className}`}>
      Developed by <a href="https://github.com/vlad-burthev">Vlad Burtsev</a>
    </footer>
  );
};

export default Footer;
