import App from './App';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Result from './Result';
import renderer from 'react-test-renderer';

configure({ adapter: new Adapter() });

it("test 'Result' component is rendered once", () => {
  const renderApp = shallow(<App />);
  expect(renderApp.find(Result)).toHaveLength(1);
});

it('test snapshot of <App /> componenet', () => {
  let tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it.skip("test 'Result' component is rendered once", () => {
  const renderApp = shallow(<App />);
  expect(renderApp.find(Result)).toHaveLength(1);
});
