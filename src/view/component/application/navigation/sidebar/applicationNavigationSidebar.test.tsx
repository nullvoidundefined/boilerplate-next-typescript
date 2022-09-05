import "jest-styled-components";

import { ApplicationNavigationSidebar } from "./applicationNavigationSidebar";
import renderer from "react-test-renderer";

it("renders correctly", () => {
    const props = {
        heightOffset: 0,
    };
    const component = renderer
        .create(<ApplicationNavigationSidebar {...props} />)
        .toJSON();
    expect(component).toMatchSnapshot();
});
