import { shallow } from "enzyme";

import Headline from "./index";
import { findByTestAttr, checkProps } from "../../utils";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Description",
        tempArr: [
          {
            firtName: "Test FirstName",
            lastName: "Test LastName",
            age: 23,
            onlineStatus: false,
            email: "test@email.com",
          },
        ],
      };
      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have props", () => {
    let component;
    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Description",
      };
      component = setUp(props);
    });

    it("Should render without errors", () => {
      const wrapper = findByTestAttr(component, "headlineComponent");
      expect(wrapper.length).toBe(1);
    });

    it("Should render a header", () => {
      const h1 = findByTestAttr(component, "header");
      expect(h1.length).toBe(1);
    });

    it("Should render a description", () => {
      const desc = findByTestAttr(component, "description");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have no props", () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
    it("Should not render", () => {
      const wrapper = findByTestAttr(component, "headlineComponent");
      expect(wrapper.length).toBe(0);
    });
  });
});
