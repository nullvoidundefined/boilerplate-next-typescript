import "jest-styled-components";

import { ApplicationHeader } from "./applicationHeader";
import renderer from "react-test-renderer";
import { noop } from "lodash";

it("renders correctly", () => {
    const props = {
        isAuth: true,
        isMobile: true,
        onLogInButtonClick: () => noop(),
        onLogOutButtonClick: () => noop(),
        onLogoClick: () => noop(),
    };
    const component = renderer
        .create(<ApplicationHeader {...props} />)
        .toJSON();
    expect(component).toMatchSnapshot();
});
