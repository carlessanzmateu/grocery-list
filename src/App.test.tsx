import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  test('should create', () => {
    const component = renderer.create(<App />);
    expect(component).toBeTruthy();
  });
  
  test('should match snapshot', () => {
    const component = renderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
})
