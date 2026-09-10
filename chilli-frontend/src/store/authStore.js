import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  isAuthenticated: false,
  
  setAuth: (user, token) => {
    set({
      user: user,
      token: token,
      isAuthenticated: true,
    });
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  },
  
  logout: () => {
    set({
      user: null,
      token: null,
      isAuthenticated: false,
    });
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  
  loadFromStorage: () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    if (token && user) {
      set({
        user: user,
        token: token,
        isAuthenticated: true,
      });
    }
  },
}));

export default useAuthStore;