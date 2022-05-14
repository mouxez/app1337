import { FC, ReactNode } from "react";
import styles from "./PageContainer.module.css";

const { container } = styles;

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return <div className={container}>{children}</div>;
};

export default PageContainer;
