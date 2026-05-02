import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User, History, Globe, Shield, ChevronRight,
  KeyRound, LogOut, CheckCircle, AlertCircle, Mail, UserPlus
} from 'lucide-react';
import { useAuthStore } from '../../store/auth.store';
import { useOrderStore } from '../../store/order.store';

interface Props {
  onViewHistory: () => void;
  onViewAdmin: () => void;
}

type AuthTab = 'login' | 'signup';

export default function ProfileView({ onViewHistory, onViewAdmin }: Props) {
  const { isLoggedIn, username, email, loginError, signupError, login, signup, logout } = useAuthStore();
  const { orderHistory } = useOrderStore();

  const [authTab, setAuthTab] = useState<AuthTab>('login');

  // Login state
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [showLoginSuccess, setShowLoginSuccess] = useState(false);

  // Signup state
  const [signupUsername, setSignupUsername] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupConfirm, setSignupConfirm] = useState('');
  const [signupLocalError, setSignupLocalError] = useState('');
  const [showSignupSuccess, setShowSignupSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = login(loginUsername.trim(), loginPassword);
    if (ok) {
      setShowLoginSuccess(true);
      setTimeout(() => setShowLoginSuccess(false), 2000);
      setLoginUsername('');
      setLoginPassword('');
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setSignupLocalError('');

    if (signupPassword !== signupConfirm) {
      setSignupLocalError('Passwords do not match.');
      return;
    }

    const ok = signup(signupUsername.trim(), signupEmail.trim(), signupPassword);
    if (ok) {
      setShowSignupSuccess(true);
      setTimeout(() => setShowSignupSuccess(false), 2000);
      setSignupUsername('');
      setSignupEmail('');
      setSignupPassword('');
      setSignupConfirm('');
    }
  };

  const inputClass =
    'w-full bg-stone-50 rounded-xl py-3 pl-11 pr-4 text-sm font-sans focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] transition-all placeholder:text-stone-300';

  return (
    <div className="py-8 px-6 min-h-full bg-[#F4F4F5]">
      {/* Profile Header */}
      <header className="mb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="w-12 h-[1px] bg-[var(--color-primary)]" />
          <span className="font-label text-xs uppercase tracking-[0.4em] text-[var(--color-primary)]">User Access</span>
        </motion.div>
        <h1 className="text-5xl font-display tracking-tighter leading-none mb-4">Profile.</h1>
      </header>

      <div className="flex flex-col gap-6">
        {/* Auth Section */}
        <div className="w-full">
            {isLoggedIn ? (
              /* ─── LOGGED IN ─── */
              <motion.div
                key="logged-in"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-8 rounded-[2rem] bg-white border border-stone-100 shadow-sm"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)] flex items-center justify-center shadow-lg">
                      <User className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-label uppercase tracking-widest text-stone-400 mb-0.5">Authenticated</p>
                      <h2 className="text-xl font-display">{username}</h2>
                      {email && (
                        <p className="text-[11px] font-sans text-stone-400 mt-0.5">{email}</p>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center gap-2 px-4 py-2 text-stone-400 hover:text-red-500 border border-stone-100 hover:border-red-200 rounded-xl transition-all text-xs font-label font-bold uppercase tracking-widest"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>

                <div className="flex gap-3 pt-4 border-t border-stone-100">
                  <div className="flex-1 bg-stone-50 p-4 rounded-xl text-center">
                    <p className="text-2xl font-display">{orderHistory?.length || 0}</p>
                    <p className="text-[9px] font-label uppercase tracking-widest opacity-40 mt-1">Total Orders</p>
                  </div>
                  <div className="flex-1 bg-stone-50 p-4 rounded-xl text-center">
                    <p className="text-2xl font-display">
                      Rp{((orderHistory || []).reduce((s, o) => s + o.totalPrice, 0) / 1000).toFixed(0)}K
                    </p>
                    <p className="text-[9px] font-label uppercase tracking-widest opacity-40 mt-1">Total Spent</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* ─── AUTH FORM ─── */
              <motion.div
                key="auth-form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white border border-stone-100 rounded-[2rem] shadow-sm overflow-hidden"
              >
                {/* Tab Toggle */}
                <div className="flex border-b border-stone-100">
                  {(['login', 'signup'] as AuthTab[]).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setAuthTab(tab)}
                      className={`flex-1 py-4 text-[10px] font-label uppercase tracking-widest transition-all relative ${
                        authTab === tab
                          ? 'text-[var(--color-primary)] font-bold'
                          : 'text-stone-400'
                      }`}
                    >
                      {tab === 'login' ? 'Sign In' : 'Create Account'}
                      {authTab === tab && (
                        <motion.div
                          layoutId="auth-tab-indicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-primary)]"
                        />
                      )}
                    </button>
                  ))}
                </div>

                <AnimatePresence mode="wait">
                  {/* ── LOGIN PANEL ── */}
                  {authTab === 'login' && (
                    <motion.div
                      key="login-panel"
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 16 }}
                      transition={{ duration: 0.18 }}
                      className="p-8 flex flex-col gap-5"
                    >
                      <div>
                        <h2 className="text-xl font-display font-medium">Welcome back</h2>
                        <p className="text-xs font-sans text-stone-500 mt-1">Sign in to track orders and preferences.</p>
                      </div>

                      <AnimatePresence>
                        {showLoginSuccess && (
                          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-sans"
                          >
                            <CheckCircle className="w-4 h-4 shrink-0" />
                            Welcome back! You're now signed in.
                          </motion.div>
                        )}
                        {loginError && (
                          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-sans"
                          >
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            {loginError}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
                        <div className="flex gap-2">
                          <button type="button" className="flex-1 py-3 border border-stone-200 rounded-xl flex items-center justify-center gap-2 hover:bg-stone-50 transition-colors">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-4 h-4" />
                            <span className="text-xs font-sans font-bold text-stone-600">Google</span>
                          </button>
                          <button type="button" className="flex-1 py-3 border border-stone-200 rounded-xl flex items-center justify-center gap-2 hover:bg-stone-50 transition-colors">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="w-4 h-4 opacity-80" />
                            <span className="text-xs font-sans font-bold text-stone-600">Apple</span>
                          </button>
                        </div>
                        <div className="flex items-center gap-4 py-1">
                           <div className="flex-1 h-px bg-stone-100"></div>
                           <span className="text-[9px] uppercase font-label tracking-widest text-stone-300">OR WITH EMAIL</span>
                           <div className="flex-1 h-px bg-stone-100"></div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-label uppercase tracking-widest text-stone-400">Username</label>
                          <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300">
                              <User className="w-4 h-4" />
                            </div>
                            <input
                              type="text"
                              placeholder="Enter your username"
                              value={loginUsername}
                              onChange={(e) => setLoginUsername(e.target.value)}
                              required
                              className={inputClass}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-label uppercase tracking-widest text-stone-400">Password</label>
                          <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300">
                              <KeyRound className="w-4 h-4" />
                            </div>
                            <input
                              type="password"
                              placeholder="Enter your password"
                              value={loginPassword}
                              onChange={(e) => setLoginPassword(e.target.value)}
                              required
                              className={inputClass}
                            />
                          </div>
                        </div>

                        <p className="text-[10px] text-stone-400 font-sans">
                          Demo: <strong>admin</strong> / <strong>admin</strong>
                        </p>

                        <button
                          type="submit"
                          className="w-full bg-[var(--color-primary)] text-white py-4 rounded-xl font-label text-[10px] uppercase tracking-widest hover:bg-[var(--color-primary)]/90 transition-colors active:scale-[0.98]"
                        >
                          Sign In
                        </button>

                        <button
                          type="button"
                          onClick={() => setAuthTab('signup')}
                          className="text-[10px] font-label text-stone-400 tracking-wide hover:text-[var(--color-primary)] transition-colors"
                        >
                          Don't have an account? <span className="font-bold text-[var(--color-primary)]">Create one →</span>
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {/* ── SIGNUP PANEL ── */}
                  {authTab === 'signup' && (
                    <motion.div
                      key="signup-panel"
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -16 }}
                      transition={{ duration: 0.18 }}
                      className="p-8 flex flex-col gap-5"
                    >
                      <div>
                        <h2 className="text-xl font-display font-medium">Create an account</h2>
                        <p className="text-xs font-sans text-stone-500 mt-1">Join Bersejuk to save your orders and preferences.</p>
                      </div>

                      <AnimatePresence>
                        {showSignupSuccess && (
                          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl text-sm font-sans"
                          >
                            <CheckCircle className="w-4 h-4 shrink-0" />
                            Account created! You're now signed in.
                          </motion.div>
                        )}
                        {(signupLocalError || signupError) && (
                          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-sans"
                          >
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            {signupLocalError || signupError}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <form className="flex flex-col gap-4" onSubmit={handleSignup}>
                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-label uppercase tracking-widest text-stone-400">Username</label>
                          <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300">
                              <UserPlus className="w-4 h-4" />
                            </div>
                            <input
                              type="text"
                              placeholder="Choose a username"
                              value={signupUsername}
                              onChange={(e) => setSignupUsername(e.target.value)}
                              required
                              className={inputClass}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-label uppercase tracking-widest text-stone-400">Email</label>
                          <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300">
                              <Mail className="w-4 h-4" />
                            </div>
                            <input
                              type="email"
                              placeholder="your@email.com"
                              value={signupEmail}
                              onChange={(e) => setSignupEmail(e.target.value)}
                              required
                              className={inputClass}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-label uppercase tracking-widest text-stone-400">Password</label>
                          <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300">
                              <KeyRound className="w-4 h-4" />
                            </div>
                            <input
                              type="password"
                              placeholder="Min. 6 characters"
                              value={signupPassword}
                              onChange={(e) => setSignupPassword(e.target.value)}
                              required
                              className={inputClass}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-label uppercase tracking-widest text-stone-400">Confirm Password</label>
                          <div className="relative">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-300">
                              <KeyRound className="w-4 h-4" />
                            </div>
                            <input
                              type="password"
                              placeholder="Repeat your password"
                              value={signupConfirm}
                              onChange={(e) => setSignupConfirm(e.target.value)}
                              required
                              className={inputClass}
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-[var(--color-primary)] text-white py-4 rounded-xl font-label text-[10px] uppercase tracking-widest hover:bg-[var(--color-primary)]/90 transition-colors active:scale-[0.98]"
                        >
                          Create Account
                        </button>

                        <button
                          type="button"
                          onClick={() => setAuthTab('login')}
                          className="text-[10px] font-label text-stone-400 tracking-wide hover:text-[var(--color-primary)] transition-colors"
                        >
                          Already have an account? <span className="font-bold text-[var(--color-primary)]">Sign in →</span>
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
        </div>

        {/* Settings Menu */}
        <div className="w-full bg-white rounded-[2rem] border border-stone-100 shadow-sm overflow-hidden">
          {/* Admin Suite - Only for admin user */}
          {username === 'admin' && (
            <button
              onClick={onViewAdmin}
              className="w-full p-6 flex flex-col justify-center bg-white hover:bg-stone-50 transition-colors group border-b border-stone-100"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[var(--color-primary-container)] text-white flex items-center justify-center group-hover:scale-105 transition-all">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="font-sans text-sm font-bold text-stone-800">Administrative Suite</span>
                    <p className="text-[9px] font-label uppercase tracking-widest text-[#0E5C37]/60">System & Order Ledger</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-[var(--color-primary)] transition-colors" />
              </div>
            </button>
          )}

          {[
            ...(isLoggedIn ? [{ id: 'history', label: 'Order History', icon: History, hasBorder: true, action: onViewHistory }] : []),
            { id: 'language', label: 'Language Settings', icon: Globe, hasBorder: true, action: () => {} },
            { id: 'privacy', label: 'Privacy Policy', icon: Shield, hasBorder: false, action: () => {} },
          ].map((item) => (
            <button
              key={item.id}
              onClick={item.action}
              className={`w-full p-6 flex flex-col justify-center bg-white hover:bg-stone-50 transition-colors group ${item.hasBorder ? 'border-b border-stone-100' : ''}`}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-stone-50 text-[var(--color-primary)] flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="font-sans text-sm font-medium text-stone-800">{item.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-stone-300 group-hover:text-[var(--color-primary)] transition-colors duration-300" />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
