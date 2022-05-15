import { render } from "@testing-library/react";
import PageContainer from "../PageContainer";

describe("components/PageContainer", () => {
  it("renders correctly", async () => {
    const { asFragment } = render(
      <PageContainer>
        <span>I am a child!</span>
      </PageContainer>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
