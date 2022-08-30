import { Header } from "./header";
import renderer from "react-test-renderer";
import { noop } from "lodash";
import 'jest-styled-components'

it("renders correctly", () => {
  const props = {
    isAuth: true,
    isMobile: true,
    onLogInButtonClick: () => noop(),
    onLogOutButtonClick: () => noop(),
  };
  const component = renderer.create(<Header {...props} />).toJSON();
  expect(component).toMatchSnapshot();
});
