import React from 'react';
import { FormItem } from './FormLayout';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

test('should not have a colspan attribute', () => {
  const wrapper = mount(<FormItem colspan="2"></FormItem>);
  const element = wrapper.instance()._element;
  expect(element.getAttribute('colspan')).toBe('2');
});
