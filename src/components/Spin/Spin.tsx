import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "./Spin.module.css";

const { wrapper } = styles;

const antIcon = <LoadingOutlined style={{ fontSize: 64 }} spin />;

const CustomSpin = () => {
  return (
    <div className={wrapper}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default CustomSpin;
