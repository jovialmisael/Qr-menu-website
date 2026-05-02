import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  username: string | null;
  email: string | null;
  isLoggedIn: boolean;
  loginError: string | null;
  signupError: string | null;
  login: (username: string, password: string) => boolean;
  signup: (username: string, email: string, password: string) => boolean;
  logout: () => void;
}

// Built-in demo credentials
const BUILT_IN_USERS: Record<string, { password: string; email: string }> = {
  admin:   { password: 'admin',   email: 'admin@bersejuk.id' },
  staff:   { password: 'staff123', email: 'staff@bersejuk.id' },
  barista: { password: 'brew2024', email: 'barista@bersejuk.id' },
};

// Read registered users from localStorage
function getRegisteredUsers(): Record<string, { password: string; email: string }> {
  try {
    const raw = localStorage.getItem('cafe-registered-users');
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveRegisteredUsers(users: Record<string, { password: string; email: string }>) {
  localStorage.setItem('cafe-registered-users', JSON.stringify(users));
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      username: null,
      email: null,
      isLoggedIn: false,
      loginError: null,
      signupError: null,

      login: (username, password) => {
        const key = username.toLowerCase();

        // Check built-in users
        const builtin = BUILT_IN_USERS[key];
        if (builtin && builtin.password === password) {
          set({ username, email: builtin.email, isLoggedIn: true, loginError: null });
          return true;
        }

        // Check registered users
        const registered = getRegisteredUsers();
        const reg = registered[key];
        if (reg && reg.password === password) {
          set({ username, email: reg.email, isLoggedIn: true, loginError: null });
          return true;
        }

        set({ loginError: 'Invalid username or password.' });
        return false;
      },

      signup: (username, email, password) => {
        const key = username.toLowerCase().trim();

        if (!key || !email.trim() || !password) {
          set({ signupError: 'All fields are required.' });
          return false;
        }
        if (password.length < 6) {
          set({ signupError: 'Password must be at least 6 characters.' });
          return false;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          set({ signupError: 'Please enter a valid email address.' });
          return false;
        }

        // Check if username already taken
        if (BUILT_IN_USERS[key]) {
          set({ signupError: 'That username is already taken.' });
          return false;
        }
        const registered = getRegisteredUsers();
        if (registered[key]) {
          set({ signupError: 'That username is already taken.' });
          return false;
        }

        // Save new user
        registered[key] = { password, email: email.trim() };
        saveRegisteredUsers(registered);

        set({ username, email: email.trim(), isLoggedIn: true, signupError: null, loginError: null });
        return true;
      },

      logout: () => set({ username: null, email: null, isLoggedIn: false, loginError: null, signupError: null }),
    }),
    { name: 'cafe-auth-storage' }
  )
);
