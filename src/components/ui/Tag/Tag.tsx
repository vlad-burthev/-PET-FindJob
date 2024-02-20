import type { DetailedHTMLProps, FC, HTMLAttributes } from "react";
import styles from "./tag.module.scss";

interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  children: React.ReactNode;
}

const Tag: FC<TagProps> = ({ children, className, ...props }) => {
  return (
    <span
      tabIndex={0}
      className={`${styles.tag} ${styles.calssName}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Tag;
