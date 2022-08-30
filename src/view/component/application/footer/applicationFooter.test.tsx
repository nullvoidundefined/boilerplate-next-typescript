import { ApplicationFooter } from "./applicationFooter";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const footer = renderer.create(<ApplicationFooter />).toJSON();
  expect(footer).toMatchSnapshot();
});
