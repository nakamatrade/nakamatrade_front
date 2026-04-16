import { useState } from 'react';
import {
  Search,
  ChevronDown,
  LayoutGrid,
  List,
  Plus,
  MoreHorizontal,
  ImageIcon,
} from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const navItems = [
  { label: '경매방 생성', to: '#' },
  { label: '경매방 입장', to: '#' },
  { label: '매물 관리', to: '/product-manage', active: true },
  { label: '사용자 관리', to: '/user-manage' },
  { label: '이용 가이드', to: '#' },
];

const games = ['리그오브레전드', '발로란트', '오버워치', '이터널리턴'];

// 샘플 플레이어 데이터
const sampleItems = [
  { id: 1, nickname: '플레이어 닉네임', desc: '코멘트 영역', teams: ['팀 1', '팀 2', '팀 3'] },
  { id: 2, nickname: '플레이어 닉네임', desc: '코멘트 영역', teams: ['팀 1', '팀 2'] },
  { id: 3, nickname: '플레이어 닉네임', desc: '코멘트 영역', teams: ['팀 1', '팀 2', '팀 3'] },
  { id: 4, nickname: '플레이어 닉네임', desc: '코멘트 영역', teams: ['팀 1'] },
];

export default function ProductManagePage() {
  const [view, setView] = useState('card'); // 'card' | 'list'
  const [activeGame, setActiveGame] = useState('리그오브레전드');
  const [selected, setSelected] = useState(new Set([1, 2]));

  const toggle = (id) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
  };

  const toggleAll = () => {
    if (selected.size === sampleItems.length) setSelected(new Set());
    else setSelected(new Set(sampleItems.map((i) => i.id)));
  };

  const clearAll = () => setSelected(new Set());
  const deleteSelected = () => {
    if (selected.size === 0) return;
    alert(`${selected.size}개 삭제`);
    setSelected(new Set());
  };

  return (
    <div className="page-root">
      <Header navItems={navItems} />

      <div className="flex flex-1">
        <Sidebar activeItem="Home" />

        <main className="flex-1 p-8 bg-white overflow-x-auto">
          {/* Title */}
          <h1 className="text-3xl font-bold text-brand-dark mb-6">매물 관리</h1>

          {/* Game tabs */}
          <div className="flex border-b border-brand-border mb-6">
            {games.map((g) => (
              <button
                key={g}
                onClick={() => setActiveGame(g)}
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

          {/* Toolbar */}
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            {/* Set selector */}
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

            {/* Search */}
            <div className="relative flex-1 min-w-[240px] max-w-md">
              <Input placeholder="이름으로 검색" className="pr-10" />
              <Search className="w-4 h-4 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            {/* View toggle */}
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

          {/* Selection status */}
          <div className="flex items-center justify-between py-3 border-t border-b border-brand-border mb-6">
            <label className="flex items-center gap-2 text-sm text-brand-dark cursor-pointer">
              <input
                type="checkbox"
                checked={selected.size === sampleItems.length}
                onChange={toggleAll}
                className="w-4 h-4 accent-brand-primary"
              />
              <span className="font-semibold">{selected.size}개 선택됨</span>
              <span className="text-brand-muted">/ 전체 {sampleItems.length}개</span>
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

          {/* Content: card or list */}
          {view === 'card' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {sampleItems.map((item) => (
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
              {sampleItems.map((item) => (
                <PlayerRow
                  key={item.id}
                  item={item}
                  selected={selected.has(item.id)}
                  onToggle={() => toggle(item.id)}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

function PlayerCard({ item, selected, onToggle }) {
  return (
    <div
      className={cn(
        'relative border rounded-xl p-4 bg-white transition',
        selected
          ? 'border-brand-primary ring-1 ring-brand-primary'
          : 'border-brand-border'
      )}
    >
      <div className="absolute top-3 left-3">
        <input
          type="checkbox"
          checked={selected}
          onChange={onToggle}
          className="w-4 h-4 accent-brand-primary"
        />
      </div>
      <button
        type="button"
        className="absolute top-3 right-3 text-brand-muted hover:text-brand-dark"
        aria-label="more"
      >
        <MoreHorizontal className="w-5 h-5" />
      </button>

      {/* Avatar */}
      <div className="w-24 h-24 rounded-full bg-brand-surface flex items-center justify-center mx-auto my-4">
        <ImageIcon className="w-8 h-8 text-brand-light" />
      </div>

      {/* Nickname / desc */}
      <div className="text-center mb-3">
        <div className="font-bold text-brand-dark">{item.nickname}</div>
        <div className="text-sm text-brand-muted mt-1">{item.desc}</div>
      </div>

      {/* Team badges */}
      <div className="flex justify-center gap-1.5 flex-wrap">
        {item.teams.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs bg-brand-surface border border-brand-border rounded text-brand-dark"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function PlayerRow({ item, selected, onToggle }) {
  return (
    <div className="flex items-center gap-4 py-3 px-4 bg-white hover:bg-brand-surface/40 transition-colors">
      <input
        type="checkbox"
        checked={selected}
        onChange={onToggle}
        className="w-4 h-4 accent-brand-primary shrink-0"
      />
      <div className="w-10 h-10 rounded-full bg-brand-surface flex items-center justify-center shrink-0">
        <ImageIcon className="w-4 h-4 text-brand-light" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-brand-dark truncate">{item.nickname}</div>
        <div className="text-sm text-brand-muted truncate">{item.desc}</div>
      </div>
      <div className="flex gap-1.5 flex-wrap justify-end max-w-[240px]">
        {item.teams.map((t, i) => (
          <span
            key={i}
            className="px-2 py-0.5 text-xs bg-brand-surface border border-brand-border rounded text-brand-dark whitespace-nowrap"
          >
            {t}
          </span>
        ))}
      </div>
      <button
        type="button"
        className="text-brand-muted hover:text-brand-dark shrink-0"
        aria-label="more"
      >
        <MoreHorizontal className="w-5 h-5" />
      </button>
    </div>
  );
}
