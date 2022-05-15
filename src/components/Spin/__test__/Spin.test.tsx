import { render } from "@testing-library/react";
import Spin from "../Spin";

test("Spin renders correctly", () => {
  const { asFragment } = render(<Spin />);
  expect(asFragment()).toMatchSnapshot();
});
