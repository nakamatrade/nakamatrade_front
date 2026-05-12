import { Search, ChevronDown, LayoutGrid, List, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

/**
 * @param {{
 *   search: string,
 *   onSearchChange: (value: string) => void,
 *   view: 'card' | 'list',
 *   onViewChange: (view: 'card' | 'list') => void,
 * }} props
 */
export default function ProductToolbar({ search, onSearchChange, view, onViewChange, onRegister }) {
  return (
    <div className="flex items-center gap-3 mb-4 flex-wrap">
      {/* 세트 선택 */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-brand-muted">세트</span>
        <button className="h-10 flex items-center justify-between gap-8 border border-brand-border rounded-md px-3 min-w-[160px] text-sm text-left hover:border-brand-primary transition-colors bg-white">
          <span>세트이름 1</span>
          <ChevronDown className="w-4 h-4 text-brand-muted" />
        </button>
        <a
          href="#"
          className="text-sm text-brand-primary underline underline-offset-2 hover:text-brand-primary-hover"
        >
          세트 관리
        </a>
      </div>

      {/* 검색 */}
      <div className="relative flex-1 min-w-[240px] max-w-md">
        <Input
          placeholder="이름으로 검색"
          className="pr-10"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search className="w-4 h-4 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      {/* 뷰 토글 */}
      <div className="flex border border-brand-border rounded-md overflow-hidden">
        <button
          onClick={() => onViewChange('card')}
          className={cn(
            'flex items-center gap-2 px-4 h-10 text-sm transition-colors',
            view === 'card'
              ? 'bg-brand-surface text-brand-primary font-semibold'
              : 'text-brand-muted hover:bg-brand-surface/40'
          )}
        >
          <LayoutGrid className="w-4 h-4" />
          카드
        </button>
        <button
          onClick={() => onViewChange('list')}
          className={cn(
            'flex items-center gap-2 px-4 h-10 text-sm transition-colors border-l border-brand-border',
            view === 'list'
              ? 'bg-brand-surface text-brand-primary font-semibold'
              : 'text-brand-muted hover:bg-brand-surface/40'
          )}
        >
          <List className="w-4 h-4" />
          리스트
        </button>
      </div>

      <Button variant="outline" className="h-10 gap-1 ml-auto" onClick={onRegister}>
        <Plus className="w-4 h-4" />
        플레이어 등록
      </Button>
    </div>
  );
}
