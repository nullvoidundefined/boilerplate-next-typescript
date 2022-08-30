import { Footer } from "./footer";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const footer = renderer.create(<Footer />).toJSON();
  expect(footer).toMatchSnapshot();
});
