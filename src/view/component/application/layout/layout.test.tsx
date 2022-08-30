import "jest-styled-components";

import { Layout } from "./layout";
import renderer from "react-test-renderer";
import { noop } from "lodash";

it("renders correctly", () => {
  const props = {
    children: "Hello Layout!",
    contentHeightOffset: 0,
    isMobile: false,
    navigationDropdownHeightOffset: 0,
    onLogInButtonClick: () => noop(),
    onLogOutButtonClick: () => noop(),
    user: null,
  };
  const component = renderer.create(<Layout {...props} />).toJSON();
  expect(component).toMatchSnapshot();
});
