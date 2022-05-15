import { FC, ReactNode } from "react";
import styles from "./Card.module.css";

const { container } = styles;

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card: FC<CardProps> = ({ children, className = "" }) => {
  return <div className={`${container} ${className}`}>{children}</div>;
};

export default Card;
