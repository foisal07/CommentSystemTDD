import { shallow } from "enzyme";
import CommentBox from "../CommentBox";

let component;

beforeEach(() => {
  component = shallow(<CommentBox />);
});

it("render a textarea and a button", () => {
  expect(component.find("textarea").length).toEqual(1);
  expect(component.find("button").length).toEqual(1);
});

it("has a textarea where user can type in", () => {
  component.find("textarea").simulate("change", {
    target: { value: "new comment" },
  });
  component.update();
  expect(component.find("textarea").prop("value")).toEqual("new comment");
});

it("empties textarea after submit", () => {
  component.find("textarea").simulate("change", {
    target: { value: "new comment" },
  });
  component.update();
  component.find("form").simulate("submit");
  component.update();
  expect(component.find("textarea").prop("value")).toEqual("");
});
