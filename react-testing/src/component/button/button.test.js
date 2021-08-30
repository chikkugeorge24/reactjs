import { shallow } from "enzyme";
import SharedButton from "./index";
import { findByTestAttr, checkProps } from "../../utils";

const setUp = (props = {}) => {
  const component = shallow(<SharedButton {...props} />);
  return component;
};

describe("SharedButton Component", () => {
  describe("Checking prop types", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        buttonText: "Example Button Text",
        emitEvent: () => {},
      };
      const propsErr = checkProps(SharedButton, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let component;
    beforeEach(() => {
      const props = {
        buttonText: "Example Button Text",
        emitEvent: () => {},
      };
      component = setUp(props);
    });

    it("Should render a button", () => {
      const button = findByTestAttr(component, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
