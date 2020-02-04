import ShoppingListItem from './shopping-list-item.model';
import * as uuid from 'uuid';

describe( 'Shopping list item model', () => {
  let item: ShoppingListItem;

  beforeEach(() => {
    const q = Math.ceil(Math.random() * 1);
    item = new ShoppingListItem('Teste list', q, q);
  });

  it('should have name', () => {
    expect(item.name).toBeTruthy();
  });

  it('should have quantity', () => {
    expect(item.quantity).toBeTruthy();
  });

  it('should have price', () => {
    expect(item.price).toBeTruthy();
  });



});

