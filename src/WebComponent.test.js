import React from 'react';
import ReactDOM from 'react-dom';
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

  invokeRenderer() {
    // TODO: Ideally ReactDOM.render() should only be invoked once.
    // Find out if the renderer APIs could work without having to call
    // ReactDOM.render() multiple times.
    ReactDOM.render(this.props.renderer(), this.element);
  }
}

const getElement = (props) => {
  return mount(<FooBar {...props} />).instance().element;
}

test('should have empty props', () => {
  expect(mount(<FooBar />).props()).toStrictEqual({});
});

test('should unmount without errors', () => {
  expect(() => {
    mount(<FooBar />).unmount();
  }).not.toThrow();
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

test('should only have one event listener', () => {
  let callCount = 0;
  const component = mount(<FooBar
      renderer={() => <FooBar onFooBar={() => callCount++} />}>
    </FooBar>).instance();

  component.invokeRenderer();
  component.invokeRenderer();

  component.element.firstElementChild.dispatchEvent(new CustomEvent('foo-bar'));

  expect(callCount).toEqual(1);
});

test('should set the property', () => {
  expect(getElement({foo: 'bar'}).foo).toBe('bar');
});

test('should not set the attribute', () => {
  expect(getElement({foo: 'bar'}).hasAttribute('foo')).toBe(false);
});

