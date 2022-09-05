import "jest-styled-components";

import { ApplicationNavigationDropdown } from "./applicationNavigationDropdown";
import renderer from "react-test-renderer";
import { noop } from "lodash";

it("renders correctly", () => {
    const props = {
        isOpen: true,
        heightOffset: 0,
        onLinkClick: () => noop(),
    };
    const component = renderer
        .create(<ApplicationNavigationDropdown {...props} />)
        .toJSON();
    expect(component).toMatchSnapshot();
});
