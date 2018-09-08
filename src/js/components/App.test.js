import App from './App';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Result from './Result';

configure({ adapter: new Adapter() });

it("test 'Result' component is rendered once", () => {
  const renderApp = shallow(<App />);
  expect(renderApp.find(Result)).toHaveLength(1);
});

it("test 'Result' component is rendered twice", () => {
  const renderApp = shallow(<App />);
  expect(renderApp.find(Result)).toHaveLength(2);
});

it.skip("test 'Result' component is rendered once", () => {
  const renderApp = shallow(<App />);
  expect(renderApp.find(Result)).toHaveLength(1);
});
