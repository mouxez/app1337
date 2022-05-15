import { render } from "@testing-library/react";
import Card from "../Card";

describe("components/Card", () => {
  it("renders correctly", async () => {
    const { asFragment } = render(
      <Card>
        <span>I am a child!</span>
      </Card>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
