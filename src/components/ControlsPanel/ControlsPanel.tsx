import { CSSProperties, FC } from "react";
import { Select } from "antd";
import Card from "../Card/Card";
import styles from "./ControlsPanel.module.css";

const { Option } = Select;

const { container, title } = styles;

const selectStyle: CSSProperties = {
  width: 200,
};

// const handleChange = (e: string) => {
//   console.log(e);
// };

// const handleClear = () => {
//   console.log("clear");
// };

const ControlsPanel: FC = () => {
  return (
    <Card className={container}>
      <h1 className={title}>1337 fellows</h1>
      <Select
        // defaultValue="no"
        style={selectStyle}
        allowClear
        size="large"
        placeholder="Select Office"
        // onChange={handleChange}
        // onClear={handleClear}
      >
        <Option value="lucy">Lucy</Option>
      </Select>
    </Card>
  );
};

export default ControlsPanel;
