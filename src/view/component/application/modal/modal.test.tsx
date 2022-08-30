import "jest-styled-components";

import { Modal } from "./modal";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const props = {
    initialContent: null
  };
  const component = renderer.create(<Modal {...props} />).toJSON();
  expect(component).toMatchSnapshot();
});
