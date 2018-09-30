import React from 'react';
import WebComponent from './WebComponent';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

class FooBar extends WebComponent {
  constructor() {
    super('foo-bar');
  }

  _configRef(e) {
    this.element = e;
  }
}

const getElement = (props) => {
  return mount(<FooBar {...props} />).instance().element;
}

test('should have empty props', () => {
  expect(mount(<FooBar />).props()).toStrictEqual({});
});

test('should have the theme attribute', () => {
  expect(getElement({theme: 'foo'}).getAttribute('theme')).toEqual('foo');
});

test('should have the class name', () => {
  expect(getElement({className: 'foo'}).classList.contains('foo')).toBe(true);
});

test('should set the event listener', done => {
  const element = getElement({onFooBar: () => done()});
  element.dispatchEvent(new CustomEvent('foo-bar'));
});

test('should set the property', () => {
  expect(getElement({foo: 'bar'}).foo).toBe('bar');
});

test('should not set the attribute', () => {
  expect(getElement({foo: 'bar'}).hasAttribute('foo')).toBe(false);
});

