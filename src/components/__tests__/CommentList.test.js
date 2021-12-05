import CommentList from "../CommentList";
import Root from "../../Root";
import { mount } from "enzyme";

let component;

beforeEach(() => {
  const initialState = ["comment1", "comment2"];

  component = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("shows the number of li elements", () => {
  console.log(component.find("li").length);
  expect(component.find("li").length).toEqual(2);
});
