import React from 'react';
import * as grid from './VaadinGrid';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const getElement = (props) => {
  return mount(<grid.VaadinGridColumn {...props} />).instance()._element;
}

test('should render the body cell content', () => {
  const column = getElement({renderer: () => <div>foo</div>});
  const root = document.createElement('div');
  column.renderer(root);
  expect(root.textContent).toBe('foo');
});

test('should render the header cell content', () => {
  const column = getElement({headerComponent: <div>foo</div>});
  const root = document.createElement('div');
  column.headerRenderer(root);
  expect(root.textContent).toBe('foo');
});

test('should render the details cell content', () => {
  const vaadinGrid = mount(<grid.VaadinGrid rowDetailsRenderer={() => <div>foo</div>} />).instance()._element;
  const root = document.createElement('div');
  vaadinGrid.rowDetailsRenderer(root);
  expect(root.textContent).toBe('foo');
});

test('should not have a details renderer', () => {
  const vaadinGrid = mount(<grid.VaadinGrid />).instance()._element;
  expect(vaadinGrid.rowDetailsRenderer).toBe(undefined);
});

test('should have the expected tag name', () => {
  for (let componentName in grid) {
    const GridComponent = grid[componentName];
    const tagName = componentName.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`).substr(1);
    const component = shallow(<GridComponent />);
    expect(component.instance().tagName).toBe(tagName);
  }
});

