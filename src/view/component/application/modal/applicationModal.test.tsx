import "jest-styled-components";

import { ApplicationModal } from "./applicationModal";
import renderer from "react-test-renderer";

it("renders correctly", () => {
    const props = {
        initialContent: null,
    };
    const component = renderer.create(<ApplicationModal {...props} />).toJSON();
    expect(component).toMatchSnapshot();
});
