import React from 'react';
import { Button } from '../Button.js';
import renderer from 'react-test-renderer';

describe('button component tests', () => {
  it('renders button component', () => {
    const button = renderer.create(<Button />);
    expect(button.toJSON()).toMatchSnapshot();
  });
});
