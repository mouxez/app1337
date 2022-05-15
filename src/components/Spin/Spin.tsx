import { CSSProperties } from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import styles from "./Spin.module.css";

const { wrapper } = styles;

const iconStyle: CSSProperties = {
  fontSize: 64,
  color: "#949494",
};

const antIcon = <LoadingOutlined style={iconStyle} spin />;

const CustomSpin = () => {
  return (
    <div className={wrapper}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default CustomSpin;
