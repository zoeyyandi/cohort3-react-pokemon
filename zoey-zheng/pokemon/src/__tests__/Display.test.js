import React from 'react';
import { Display } from '../Display.js';
import renderer from 'react-test-renderer';

describe('Display component tests', () => {
  it('renders display component', () => {
    const display = renderer.create(<Display />);
    expect(display.toJSON()).toMatchSnapshot();
  });
});
