import React from 'react';
import {create, act} from 'react-test-renderer';
import EventScreen from '../src/screens/EventScreen';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../src/redux/reducers';

const store = createStore(reducer, {status: 'default status'});
const tree = create(
 <Provider store={store}>
<EventScreen />
 </Provider>,
);

jest.runAllTimers();
jest.useFakeTimers('legacy');

it('call timeout', () => {
  act(() => jest.runAllTimers());

  const text = tree.root.findByProps({testID: 'myText'}).props;
  expect(text.children).toEqual('timeout is called');
});

test ('status stored properly', () => {
    expect(store.getState().status).toEqual('default status');
})