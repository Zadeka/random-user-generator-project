import { LogIn, LogOut } from 'lucide-react';

interface LoginToggleProps {
  isLoggedIn: boolean;
  toggleLogin: () => void;
}

export const LoginToggle = ({ isLoggedIn, toggleLogin }: LoginToggleProps) => (
  <button
    onClick={toggleLogin}
    className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
    aria-label={isLoggedIn ? 'Logout' : 'Login'}
  >
    {isLoggedIn ? <LogOut size={20} /> : <LogIn size={20} />}
  </button>
);