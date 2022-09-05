import { ApplicationFooter } from "./applicationFooter";
import renderer from "react-test-renderer";

it("renders correctly", () => {
    const component = renderer.create(<ApplicationFooter />).toJSON();
    expect(component).toMatchSnapshot();
});
