import { render } from "@testing-library/react";
import Spin from "../Spin";

describe("components/Spin", () => {
  it("renders correctly", async () => {
    const { asFragment } = render(<Spin />);
    expect(asFragment()).toMatchSnapshot();
  });
});
