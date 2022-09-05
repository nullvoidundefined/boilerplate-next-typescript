import renderer from "react-test-renderer";

import { Avatar } from "./avatar";

it("renders correctly", () => {
    const component = renderer.create(<Avatar />).toJSON();
    expect(component).toMatchSnapshot();
});
