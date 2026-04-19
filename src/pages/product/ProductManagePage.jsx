import { useState } from 'react';
import { Search, ChevronDown, LayoutGrid, List, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import PageLayout from '@/components/common/PageLayout';
import PlayerCard from '@/components/common/PlayerCard';
import PlayerRow from '@/components/common/PlayerRow';

const navItems = [
  { label: '경매방 생성', to: '#' },
  { label: '경매방 입장', to: '#' },
  { label: '매물 관리', to: '/product-manage', active: true },
  { label: '사용자 관리', to: '/user-manage' },
  { label: '이용 가이드', to: '#' },
];

const games = ['리그오브레전드', '발로란트', '오버워치', '이터널리턴'];

const sampleItems = [
  { id: 1, nickname: '플레이어 닉네임', desc: '소개글 영역', teams: ['챔 1', '챔 2', '챔 3'] },
  { id: 2, nickname: '플레이어 닉네임', desc: '소개글 영역', teams: ['챔 1', '챔 2'] },
  { id: 3, nickname: '플레이어 닉네임', desc: '소개글 영역', teams: ['챔 1', '챔 2', '챔 3'] },
  { id: 4, nickname: '플레이어 닉네임', desc: '소개글 영역', teams: ['챔 1'] },
];

export default function ProductManagePage() {
  const [view, setView] = useState('card');           // 'card' | 'list'
  const [activeGame, setActiveGame] = useState('리그오브레전드');
  const [selected, setSelected] = useState(new Set([1, 2]));
  const [search, setSearch] = useState('');

  const filtered = sampleItems.filter((p) =>
    p.nickname.includes(search) || p.desc.includes(search)
  );

  const toggle = (id) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id); else next.add(id);
    setSelected(next);
  };

  const toggleAll = () => {
    setSelected(
      selected.size === filtered.length
        ? new Set()
        : new Set(filtered.map((i) => i.id))
    );
  };

  const clearAll = () => setSelected(new Set());

  const deleteSelected = () => {
    if (selected.size === 0) return;
    alert(`${selected.size}개 삭제`);
    setSelected(new Set());
  };

  return (
    <PageLayout navItems={navItems} className="p-8 bg-white overflow-x-auto">
      <h1 className="text-3xl font-bold text-brand-dark mb-6">매물 관리</h1>

      {/* 게임 탭 */}
      <div className="flex border-b border-brand-border mb-6">
        {games.map((g) => (
          <button
            key={g}
            onClick={() => { setActiveGame(g); setSelected(new Set()); }}
            className={cn(
              'px-8 py-3 text-sm transition-colors border-b-2 -mb-px',
              activeGame === g
                ? 'text-brand-primary border-brand-primary font-semibold'
                : 'text-brand-muted border-transparent hover:text-brand-dark'
            )}
          >
            {g}
          </button>
        ))}
      </div>

      {/* 툴바 */}
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
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="w-4 h-4 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>

        {/* 뷰 토글 */}
        <div className="flex border border-brand-border rounded-md overflow-hidden">
          <button
            onClick={() => setView('card')}
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
            onClick={() => setView('list')}
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

        <Button variant="outline" className="h-10 gap-1 ml-auto">
          <Plus className="w-4 h-4" />
          플레이어 등록
        </Button>
      </div>

      {/* 선택 상태 바 */}
      <div className="flex items-center justify-between py-3 border-t border-b border-brand-border mb-6">
        <label className="flex items-center gap-2 text-sm text-brand-dark cursor-pointer">
          <input
            type="checkbox"
            checked={filtered.length > 0 && selected.size === filtered.length}
            onChange={toggleAll}
            className="w-4 h-4 accent-brand-primary"
          />
          <span className="font-semibold">{selected.size}개 선택됨</span>
          <span className="text-brand-muted">/ 전체 {filtered.length}개</span>
        </label>

        <div className="flex items-center gap-4 text-sm">
          <button
            onClick={clearAll}
            className="text-brand-muted hover:text-brand-dark transition-colors"
          >
            선택 해제
          </button>
          <button
            onClick={deleteSelected}
            className="text-red-500 hover:text-red-600 font-semibold transition-colors"
          >
            선택 삭제
          </button>
        </div>
      </div>

      {/* 콘텐츠 */}
      {filtered.length === 0 ? (
        <p className="text-sm text-brand-muted text-center py-10">검색 결과가 없습니다.</p>
      ) : view === 'card' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item) => (
            <PlayerCard
              key={item.id}
              item={item}
              selected={selected.has(item.id)}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      ) : (
        <div className="border border-brand-border rounded-md overflow-hidden divide-y divide-brand-border">
          {filtered.map((item) => (
            <PlayerRow
              key={item.id}
              item={item}
              selected={selected.has(item.id)}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      )}
    </PageLayout>
  );
}