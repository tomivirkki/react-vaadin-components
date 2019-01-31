import React from 'react';
import Overlaid from './Overlaid';
import { CustomElementIs } from './CustomElement';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

class OverlaidComponent extends Overlaid(CustomElementIs('overlaid-component')) {}

Enzyme.configure({adapter: new Adapter()});

test('should render the component content', () => {
  const wrapper = mount(<OverlaidComponent>foo</OverlaidComponent>);
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
  const wrapper = mount(<OverlaidComponent opened={foo}>foo</OverlaidComponent>);
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
      <OverlaidComponent><Consumer>{
        ({foo}) => <div>{foo}</div>
      }</Consumer></OverlaidComponent>
  </AppContext.Provider>).instance()._element;

  const root = document.createElement('div');
  component.renderer(root, component);

  expect(root.textContent).toBe('bar');
});
