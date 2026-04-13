import { Home, CreditCard, AlignLeft, Bell, User, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { label: 'Home', Icon: Home },
  { label: 'Cards', Icon: CreditCard },
  { label: 'Transactions', Icon: AlignLeft },
];

const bottomItems = [
  { label: 'Notifications', Icon: Bell },
  { label: 'Account', Icon: User },
];

function SidebarItem({ label, Icon, active }) {
  return (
    <li
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors",
        active
          ? "bg-brand-primary text-white"
          : "text-brand-light hover:bg-white/10 hover:text-white"
      )}
    >
      <Icon className="w-5 h-5 shrink-0" />
      <span className="flex-1 text-sm font-medium">{label}</span>
      <ChevronRight className="w-4 h-4 opacity-60" />
    </li>
  );
}

export default function Sidebar({ activeItem = 'Home' }) {
  return (
    <aside className="w-56 flex flex-col bg-brand-dark min-h-full py-4 px-3 shrink-0">
      <ul className="flex flex-col gap-1 flex-1">
        {menuItems.map((item) => (
          <SidebarItem key={item.label} {...item} active={item.label === activeItem} />
        ))}
      </ul>
      <ul className="flex flex-col gap-1 border-t border-white/10 pt-4">
        {bottomItems.map((item) => (
          <SidebarItem key={item.label} {...item} active={item.label === activeItem} />
        ))}
      </ul>
    </aside>
  );
}
