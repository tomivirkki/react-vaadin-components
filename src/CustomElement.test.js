import React from 'react';
import ReactDOM from 'react-dom';
import { CustomElementIs, CustomElement } from './CustomElement';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

class FooBar extends CustomElementIs('foo-bar') {
  _configRef(e) {
    this.element = e;

    Object.defineProperty(e, 'bar', {
      set: value => e.dispatchEvent(new CustomEvent('bar-changed')),
      configurable: true
    });
  }
}

const getElement = (props) => {
  return mount(<FooBar {...props} />).instance().element;
}

test('should have empty props', () => {
  expect(mount(<FooBar />).props()).toStrictEqual({});
});

test('should unmount without errors', () => {
  expect(() => mount(<FooBar />).unmount()).not.toThrow();
});

test('should have the expected tag name', () => {
  expect(getElement().localName).toEqual('foo-bar');
});

test('should have the theme attribute', () => {
  expect(getElement({theme: 'foo'}).getAttribute('theme')).toEqual('foo');
});

test('should not set theme property', () => {
  expect(getElement({theme: 'foo'}).theme).toBe(undefined);
});

test('should have the class name', () => {
  expect(getElement({className: 'foo'}).classList.contains('foo')).toBe(true);
});

test('should set the event listener', done => {
  const element = getElement({onFooBar: () => done()});
  element.dispatchEvent(new CustomEvent('foo-bar'));
});

test('should only have one event listener', () => {
  let callCount = 0;
  const root = document.createElement('div');
  ReactDOM.render(<FooBar onFooBar={() => callCount++} />, root);
  ReactDOM.render(<FooBar onFooBar={() => callCount++} />, root);

  root.firstElementChild.dispatchEvent(new CustomEvent('foo-bar'));
  expect(callCount).toEqual(1);
});

test('should only have one type of event listener', () => {
  let callCount = 0;
  const root = document.createElement('div');
  ReactDOM.render(<FooBar onFooBar={() => callCount++} />, root);
  ReactDOM.render(<FooBar onBarBaz={() => callCount++} />, root);

  root.firstElementChild.dispatchEvent(new CustomEvent('foo-bar'));
  root.firstElementChild.dispatchEvent(new CustomEvent('bar-baz'));
  expect(callCount).toEqual(1);
});

test('should not invoke change listeners on property change', () => {
  let callCount = 0;
  const root = document.createElement('div');
  ReactDOM.render(<FooBar bar="1" onBarChanged={() => callCount++} />, root);
  ReactDOM.render(<FooBar bar="2" onBarChanged={() => callCount++} />, root);

  expect(callCount).toEqual(0);
});

test('should not invoke change listeners on property change 2', () => {
  let callCount = 0;
  const root = document.createElement('div');
  ReactDOM.render(<FooBar onBarChanged={() => callCount++} bar="1" />, root);
  ReactDOM.render(<FooBar onBarChanged={() => callCount++} bar="2" />, root);

  expect(callCount).toEqual(0);
});

test('should set the property', () => {
  expect(getElement({foo: 'bar'}).foo).toBe('bar');
});

test('should not set the attribute', () => {
  expect(getElement({foo: 'bar'}).hasAttribute('foo')).toBe(false);
});

test('should have a child', () => {
  expect(mount(<FooBar><FooBar /></FooBar>).find('foo-bar foo-bar').length).toBe(1);
});

test('should apply aria attributes', () => {
  const element = mount(<FooBar aria-label="foo" />).instance().element;
  expect(element.getAttribute('aria-label')).toBe('foo');
});

test('should wrap a custom element', () => {
  const element = mount(<CustomElement tagName='custom-element' />).instance()._element;
  expect(element.localName).toBe('custom-element');
});


