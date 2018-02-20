import React from 'react';
import { Header } from '../Header.js';
import renderer from 'react-test-renderer';

describe('header component tests', () => {
  it('renders header component', () => {
    const header = renderer.create(<Header />);
    expect(header.toJSON()).toMatchSnapshot();
  });
});
