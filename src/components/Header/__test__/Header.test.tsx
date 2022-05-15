import { render } from "@testing-library/react";
import Header from "../Header";

describe("components/Header", () => {
  it("renders correctly", async () => {
    const onClick = jest.fn();
    const { asFragment } = render(<Header viewType="table" setViewType={onClick} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
