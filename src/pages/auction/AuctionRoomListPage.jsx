import { useState } from 'react';
import PageLayout from '@/components/common/PageLayout';
import GameTabs from '@/components/product/GameTabs';
import AuctionToolbar from '@/components/auction/AuctionToolbar';
import AuctionRoomGrid from '@/components/auction/AuctionRoomGrid';

const navItems = [
  { label: '경매방 생성', to: '/auction/load-players' },
  { label: '경매방 입장', to: '/auction/rooms' },
  { label: '매물 관리', to: '/product-manage' },
  { label: '사용자 관리', to: '/user-manage' },
  { label: '이용 가이드', to: '#' },
];

const games = ['리그오브레전드', '발로란트', '오버워치', '이터널리턴'];

const sampleRooms = [
  { id: 1, name: '경매방 1', desc: '챔피언십 시즌 팀 결성' },
  { id: 2, name: '경매방 2', desc: '주말 친선 경매방' },
  { id: 3, name: '경매방 3', desc: '플래티넘 이상 모집' },
  { id: 4, name: '경매방 4', desc: '신규 유저 환영방' },
  { id: 5, name: '경매방 5', desc: '실력자 매칭 경매' },
  { id: 6, name: '경매방 6', desc: '아카데미 팀 빌딩' },
  { id: 7, name: '경매방 7', desc: '주중 저녁 경매' },
  { id: 8, name: '경매방 8', desc: '대회 준비 경매방' },
];

export default function AuctionRoomListPage() {
  const [activeGame, setActiveGame] = useState('리그오브레전드');
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(new Set());

  const filtered = sampleRooms.filter(
    (r) => r.name.includes(search) || r.desc.includes(search)
  );

  const toggle = (id) => {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id); else next.add(id);
    setSelected(next);
  };

  return (
    <PageLayout navItems={navItems} className="p-8 bg-white overflow-x-auto">
      <h1 className="text-3xl font-bold text-brand-dark mb-6">경매방</h1>

      <GameTabs
        games={games}
        activeGame={activeGame}
        onSelect={(g) => { setActiveGame(g); setSelected(new Set()); }}
      />

      <AuctionToolbar
        search={search}
        onSearchChange={setSearch}
        onCreate={() => alert('경매방을 생성합니다.')}
      />

      <AuctionRoomGrid
        rooms={filtered}
        selected={selected}
        onToggle={toggle}
        onEnter={(id) => alert(`경매방 ${id} 입장`)}
      />
    </PageLayout>
  );
}
