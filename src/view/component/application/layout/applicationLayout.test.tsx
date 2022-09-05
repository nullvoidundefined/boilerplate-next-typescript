import "jest-styled-components";

import { ApplicationLayout } from "./applicationLayout";
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
        onLogoClick: () => noop(),
        user: null,
    };
    const component = renderer
        .create(<ApplicationLayout {...props} />)
        .toJSON();
    expect(component).toMatchSnapshot();
});
