import { Dispatch, FC, SetStateAction } from "react";
import { Radio, RadioChangeEvent } from "antd";
import Card from "../Card/Card";
import styles from "./Header.module.css";

const { container, title, controlsWrap } = styles;

type HeaderProps = {
  viewType: string;
  setViewType: Dispatch<SetStateAction<"table" | "list">>;
};

const Header: FC<HeaderProps> = ({ viewType, setViewType }) => {
  const handleChange = (e: RadioChangeEvent) => {
    setViewType(e.target.value);
  };

  return (
    <Card className={container}>
      <h1 className={title}>1337 fellows</h1>
      <div className={controlsWrap}>
        <Radio.Group value={viewType} onChange={handleChange}>
          <Radio.Button value="table">Table</Radio.Button>
          <Radio.Button value="list">List</Radio.Button>
        </Radio.Group>
      </div>
    </Card>
  );
};

export default Header;
