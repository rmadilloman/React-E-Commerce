import authReducer, {
  login,
  register,
  logout,
} from '../redux/slices/authSlice';

describe('authSlice', () => {
  test('successful login', () => {
    const state = authReducer(
      undefined,
      login({ username: 'user', password: 'admin' })
    );

    expect(state.isAuthenticated).toBe(true);
    expect(state.user.username).toBe('user');
    expect(state.error).toBeNull();
  });

  test('failed login', () => {
    const state = authReducer(
      undefined,
      login({ username: 'wrong', password: 'wrong' })
    );

    expect(state.isAuthenticated).toBe(false);
    expect(state.error).toBe('Invalid credentials');
  });

  test('register logs in user', () => {
    const state = authReducer(
      undefined,
      register({ username: 'newUser' })
    );

    expect(state.isAuthenticated).toBe(true);
    expect(state.user.username).toBe('newUser');
  });

  test('logout resets state', () => {
    let state = authReducer(
      undefined,
      login({ username: 'user', password: 'admin' })
    );

    state = authReducer(state, logout());

    expect(state.isAuthenticated).toBe(false);
    expect(state.user).toBeNull();
  });
});
