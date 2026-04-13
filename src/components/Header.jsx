import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function Header({ navItems = [] }) {
  return (
    <header className="flex items-center h-16 px-8 bg-brand-dark shrink-0">
      <Link to="/" className="text-white font-bold text-xl mr-10 tracking-tight">
        Nakama<span className="text-brand-primary">Trade</span>
      </Link>
      <nav className="flex items-center gap-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.to}
            className={cn(
              "px-4 py-1.5 rounded-md text-sm font-medium transition-colors",
              item.active
                ? "bg-brand-primary text-white"
                : "text-brand-light hover:text-white hover:bg-white/10"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
