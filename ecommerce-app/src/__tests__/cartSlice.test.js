import cartReducer, {
  addToCart,
  removeFromCart,
  clearCart,
} from '../redux/slices/cartSlice';

describe('cartSlice', () => {
  const item = { id: 1, name: 'Test', price: 10 };

  test('adds new item to cart', () => {
    const state = cartReducer(undefined, addToCart(item));
    expect(state.items.length).toBe(1);
    expect(state.total).toBe(10);
  });

  test('increments quantity if item exists', () => {
    let state = cartReducer(undefined, addToCart(item));
    state = cartReducer(state, addToCart(item));

    expect(state.items[0].quantity).toBe(2);
    expect(state.total).toBe(20);
  });

  test('removes item from cart', () => {
    let state = cartReducer(undefined, addToCart(item));
    state = cartReducer(state, removeFromCart(1));

    expect(state.items.length).toBe(0);
    expect(state.total).toBe(0);
  });

  test('clears cart', () => {
    let state = cartReducer(undefined, addToCart(item));
    state = cartReducer(state, clearCart());

    expect(state.items).toEqual([]);
    expect(state.total).toBe(0);
  });
});
