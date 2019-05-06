import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { shallow } from "enzyme";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("should display a text input to fill question", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('input[type="text"]').length).toBe(1);
});

it("should display a submit button to send question to the Internet Gods", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('button[type="submit"]').length).toBe(1);
});
