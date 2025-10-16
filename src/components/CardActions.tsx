import { LoginToggle } from './LoginToggle';
import { ThemeToggle } from './ThemeToggle';

interface CardActionsProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isLoggedIn: boolean;
  toggleLogin: () => void;
}

export const CardActions = ({ theme, toggleTheme, isLoggedIn, toggleLogin }: CardActionsProps) => (
  // Container ini memastikan tata letak yang benar
  <div className="absolute top-4 right-4 flex items-center space-x-2">
    <LoginToggle isLoggedIn={isLoggedIn} toggleLogin={toggleLogin} />
    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
  </div>
);