import React from 'react';
import { Dialog } from './Dialog';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

test('should render the dialog content', () => {
  const wrapper = mount(<Dialog>foo</Dialog>);
  const dialog = wrapper.instance()._element;

  let root = document.createElement('div');
  dialog.renderer(root);
  expect(root.textContent).toBe('foo');

  root = document.createElement('div');
  dialog.renderer(root);
  expect(root.textContent).toBe('foo');
});

test('should retain the content on property change', () => {
  const foo = true;
  const wrapper = mount(<Dialog opened={foo}>foo</Dialog>);
  const dialog = wrapper.instance()._element;

  let root = document.createElement('div');
  dialog.renderer(root);
  root.textContent = '';

  wrapper.setProps({'foo': false});
  expect(root.textContent).toBe('foo');
});

test('should inherit the context', () => {
  const AppContext = React.createContext();
  const Consumer = AppContext.Consumer;

  const dialog = mount(<AppContext.Provider value={{foo: 'bar'}}>
      <Dialog><Consumer>{
        ({foo}) => <div>{foo}</div>
      }</Consumer></Dialog>
  </AppContext.Provider>).instance()._element;

  const root = document.createElement('div');
  dialog.renderer(root, dialog);

  expect(root.textContent).toBe('bar');
});
