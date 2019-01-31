import React from 'react';
import { Notification } from './Notification';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

test('should render the notification content', () => {
  const wrapper = mount(<Notification>foo</Notification>);
  const notification = wrapper.instance()._element;

  let root = document.createElement('div');
  notification.renderer(root);
  expect(root.textContent).toBe('foo');

  root = document.createElement('div');
  notification.renderer(root);
  expect(root.textContent).toBe('foo');
});

test('should retain the content on property change', () => {
  const foo = true;
  const wrapper = mount(<Notification opened={foo}>foo</Notification>);
  const notification = wrapper.instance()._element;

  let root = document.createElement('div');
  notification.renderer(root);
  root.textContent = '';

  wrapper.setProps({'foo': false});
  expect(root.textContent).toBe('foo');
});

test('should inherit the context', () => {
  const AppContext = React.createContext();
  const Consumer = AppContext.Consumer;

  const notification = mount(<AppContext.Provider value={{foo: 'bar'}}>
      <Notification><Consumer>{
        ({foo}) => <div>{foo}</div>
      }</Consumer></Notification>
  </AppContext.Provider>).instance()._element;

  const root = document.createElement('div');
  notification.renderer(root, notification);

  expect(root.textContent).toBe('bar');
});
