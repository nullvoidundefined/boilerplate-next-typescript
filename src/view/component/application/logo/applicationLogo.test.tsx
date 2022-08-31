import { ApplicationLogo } from "./applicationLogo";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const component = renderer.create(<ApplicationLogo />).toJSON();
  expect(component).toMatchSnapshot();
});
