import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Select } from './Select';
import { Item } from './Item';

Enzyme.configure({adapter: new Adapter()});

test('should render a list box container for items', () => {
  const wrapper = mount(<Select><Item>foo</Item></Select>);
  const component = wrapper.instance()._element;
  const root = document.createElement('div');
  component.renderer(root);
  expect(root.innerHTML).toBe('<vaadin-list-box><vaadin-item>foo</vaadin-item></vaadin-list-box>');
});
