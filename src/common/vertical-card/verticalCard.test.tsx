import React from 'react';
import renderer from 'react-test-renderer';
import VerticalCard from './verticalCard';

import { ProductMock } from '../../shared/models/__mocks__/product';

describe('VerticalCard', () => {
  test('should create', () => {
    function onItemSelected() {}
    function onItemAddedToFavorite() {}
  
    const component = renderer.create(
      <VerticalCard
        key={ProductMock.getId()}
        item={ProductMock}
        onItemSelected={onItemSelected}
        onItemAddedToFavorite={onItemAddedToFavorite}
      />
    );
    expect(component).toBeTruthy();
  });

  test('should match snapshot', () => {
    function onItemSelected() {}
    function onItemAddedToFavorite() {}
  
    const component = renderer.create(
      <VerticalCard
        key={ProductMock.getId()}
        item={ProductMock}
        onItemSelected={onItemSelected}
        onItemAddedToFavorite={onItemAddedToFavorite}
      />
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
});
