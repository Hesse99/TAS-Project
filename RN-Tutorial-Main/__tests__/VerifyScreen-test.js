import React from 'react';
import {create, act} from 'react-test-renderer';
import VerifyScreen from '../src/screens/VerifyScreen';

const tree = create(<VerifyScreen />)

jest.runAllTimers();

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});

test('button press', () => {
  const button = tree.root.findByProps({testID: 'myButton'}).props;
  act(() => button.onPress());
  const text = tree.root.findByProps({testID: 'myText'}).props;
  expect(text.children).toEqual('button pressed');
});
