import Product from '../product';
import { ProductMock } from '../__mocks__/product';

describe('Product', () => {
  test('should create', () => {
    const id = 'someId';
    const imageUrl = 'someImageUrl';
    const stock = 10;
    const productName = 'someProductName';
    const price = 100;
    const productDescription = 'someProductDescription';
    const favorite = '0';
    const quantity = 1;

    const product = new Product(id, imageUrl, stock, productName, price, productDescription, favorite, quantity);

    expect(product).toBeTruthy();
  })

  test('should has expected class structure', () => {
    const expectedValue = ProductMock;
    const id = 'someId';
    const imageUrl = 'someImageUrl';
    const stock = 10;
    const productName = 'someProductName';
    const price = 100;
    const productDescription = 'someProductDescription';
    const favorite = '0';
    const quantity = 1;

    const product = new Product(id, imageUrl, stock, productName, price, productDescription, favorite, quantity);

    expect(product).toEqual(expectedValue);
  })

  test('should have getId method', () => {
    expect(ProductMock.getId).toBeDefined();
  })

  test('should return $id when call getId method', () => {
    const expectedValue = 'someId';

    expect(ProductMock.getId()).toBe(expectedValue);
  })
});
