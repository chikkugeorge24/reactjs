import { shallow } from "enzyme";
import ListItem from "./index";
import { findByTestAttr, checkProps } from "../../utils";

const setUp = (props = {}) => {
  const component = shallow(<ListItem {...props} />);
  return component;
};

describe("ListItem Component", () => {
  describe("Checking prop types", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        title: "Test title",
        description: "Test description",
      };
      const propsErr = checkProps(ListItem, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Renders", () => {
    let component;
    beforeEach(() => {
      const props = {
        title: "Test title",
        description: "Test description",
      };
      component = setUp(props);
    });

    it("Should render a list Item", () => {
      const wrapper = findByTestAttr(component, "listComponent");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a title", () => {
      const title = findByTestAttr(component, "componentTitle");
      expect(title.length).toBe(1);
    });
    it("Should render a description", () => {
      const description = findByTestAttr(component, "componentDescription");
      expect(description.length).toBe(1);
    });
  });

  describe("Should not render", () => {
    let component;
    beforeEach(() => {
      const props = {
        description: "Test description",
      };
      component = setUp(props);
    });

    it("Component is not rendered", () => {
      const wrapper = findByTestAttr(component, "listComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
