import store from '../redux/store';

test('store works correctly', () => {
  const state = store.getState();
  expect(state.cart).toBeDefined();
  expect(state.auth).toBeDefined();
});
