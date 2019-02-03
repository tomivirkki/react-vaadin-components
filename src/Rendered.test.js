import React, { Component } from 'react';
import Rendered from './Rendered';
import { CustomElementIs } from './CustomElement';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

class RenderedComponent extends Rendered(CustomElementIs('rendered-component')) {}

class ComponentWrapper extends Component {

  constructor() {
    super();
    this.state = {foo: 'foo'};
  }

  render() {
    return <div>
      <RenderedComponent>
        <div>{this.state.foo}</div>
      </RenderedComponent>
    </div>
  }
}

Enzyme.configure({adapter: new Adapter()});

test('should not have child elements', () => {
  const wrapper = mount(<RenderedComponent><div>foo</div></RenderedComponent>);
  const component = wrapper.instance()._element;
  expect(component.children).toHaveLength(0);
});

test('should work with state', () => {
  let wrapper;
  wrapper = mount(<ComponentWrapper></ComponentWrapper>);
  const component = wrapper.find('rendered-component').instance();
  const root = document.createElement('div');

  component.renderer(root);
  expect(root.textContent).toBe('foo');
  wrapper.setState({ foo: 'bar' });
  component.renderer(root);
  expect(root.textContent).toBe('bar');
});

test('should render the component content', () => {
  const wrapper = mount(<RenderedComponent>foo</RenderedComponent>);
  const component = wrapper.instance()._element;

  let root = document.createElement('div');
  component.renderer(root);
  expect(root.textContent).toBe('foo');

  root = document.createElement('div');
  component.renderer(root);
  expect(root.textContent).toBe('foo');
});

test('should retain the content on property change', () => {
  const foo = true;
  const wrapper = mount(<RenderedComponent opened={foo}>foo</RenderedComponent>);
  const component = wrapper.instance()._element;

  let root = document.createElement('div');
  component.renderer(root);
  root.textContent = '';

  wrapper.setProps({'foo': false});
  expect(root.textContent).toBe('foo');
});

test('should inherit the context', () => {
  const AppContext = React.createContext();
  const Consumer = AppContext.Consumer;

  const component = mount(<AppContext.Provider value={{foo: 'bar'}}>
      <RenderedComponent><Consumer>{
        ({foo}) => <div>{foo}</div>
      }</Consumer></RenderedComponent>
  </AppContext.Provider>).instance()._element;

  const root = document.createElement('div');
  component.renderer(root, component);

  expect(root.textContent).toBe('bar');
});
