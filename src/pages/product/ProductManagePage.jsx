import { useState } from 'react';
import PageLayout from '@/components/common/PageLayout';
import PlayerCard from '@/components/common/PlayerCard';
import PlayerRow from '@/components/common/PlayerRow';
import GameTabs from '@/components/product/GameTabs';
import ProductToolbar from '@/components/product/ProductToolbar';
import SelectionBar from '@/components/product/SelectionBar';
import PlayerRegisterModal from '@/components/product/PlayerRegisterModal';

const navItems = [
  { label: '경매방 생성', to: '/auction/load-players' },
  { label: '경매방 입장', to: '/auction/rooms' },
  { label: '매물 관리', to: '/product-manage' },
  { label: '사용자 관리', to: '/user-manage' },
  { label: '이용 가이드', to: '#' },
];

const games = ['리그오브레전드', '발로란트', '오버워치', '이터널리턴'];

const initialItems = [
  { id: 1, nickname: '플레이어 닉네임', desc: '소개글 영역', teams: ['챔 1', '챔 2', '챔 3'] },
  { id: 2, nickname: '플레이어 닉네임', desc: '소개글 영역', teams: ['챔 1', '챔 2'] },
  { id: 3, nickname: '플레이어 닉네임', desc: '소개글 영역', teams: ['챔 1', '챔 2', '챔 3'] },
  { id: 4, nickname: '플레이어 닉네임', desc: '소개글 영역', teams: ['챔 1'] },
];

export default function ProductManagePage() {
  const [items, setItems] = useState(initialItems);
  const [view, setView] = useState('card');
  const [activeGame, setActiveGame] = useState('리그오브레전드');
  const [selected, setSelected] = useState(new Set([1, 2]));
  const [search, setSearch] = useState('');
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const filtered = items.filter((p) =>
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

  const handleRegister = ({ nickname, desc, teams }) => {
    setItems((prev) => {
      const newId = Math.max(...prev.map((i) => i.id), 0) + 1;
      return [...prev, { id: newId, nickname, desc, teams }];
    });
  };

  return (
    <PageLayout navItems={navItems} className="p-8 bg-white overflow-x-auto">
      <h1 className="text-3xl font-bold text-brand-dark mb-6">매물 관리</h1>

      <GameTabs
        games={games}
        activeGame={activeGame}
        onSelect={(g) => { setActiveGame(g); setSelected(new Set()); }}
      />

      <ProductToolbar
        search={search}
        onSearchChange={setSearch}
        view={view}
        onViewChange={setView}
        onRegister={() => setShowRegisterModal(true)}
      />

      <SelectionBar
        selected={selected}
        total={filtered.length}
        onToggleAll={toggleAll}
        onClear={() => setSelected(new Set())}
        onDelete={() => {
          if (selected.size === 0) return;
          alert(`${selected.size}개 삭제`);
          setSelected(new Set());
        }}
      />

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
      {showRegisterModal && (
        <PlayerRegisterModal
          onClose={() => setShowRegisterModal(false)}
          onSubmit={handleRegister}
        />
      )}
    </PageLayout>
  );
}
