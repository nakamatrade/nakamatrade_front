import { Search, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

/**
 * 경매방 목록 상단 툴바 - 검색 입력 + 경매방 생성 버튼
 *
 * @param {string}   search          - 검색어
 * @param {function} onSearchChange  - 검색어 변경 핸들러
 * @param {function} onCreate        - "경매방 생성" 클릭 핸들러
 */
export default function AuctionToolbar({ search, onSearchChange, onCreate }) {
  return (
    <div className="flex items-center gap-3 mb-6 flex-wrap">
      <div className="relative flex-1 min-w-[240px] max-w-md ml-auto">
        <Input
          placeholder="경매방 이름으로 검색"
          className="pr-10"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search className="w-4 h-4 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>

      <Button className="h-11 gap-1" onClick={onCreate}>
        <Plus className="w-4 h-4" />
        경매방 생성
      </Button>
    </div>
  );
}
