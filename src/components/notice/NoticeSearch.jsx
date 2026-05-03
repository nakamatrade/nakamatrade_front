import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

/**
 * @param {{ value: string, onChange: (value: string) => void }} props
 */
export default function NoticeSearch({ value, onChange }) {
  return (
    <div className="relative mb-4 max-w-sm">
      <Input
        placeholder="공지사항 검색"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pr-10"
      />
      <Search className="w-4 h-4 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}