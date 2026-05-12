import { useState } from 'react';
import PageLayout from '@/components/common/PageLayout';
import PlayerEditFilters from '@/components/auction/PlayerEditFilters';
import PlayerEditCard from '@/components/auction/PlayerEditCard';
import PlayerDetailPanel from '@/components/auction/PlayerDetailPanel';

const navItems = [
  { label: '경매방 생성', to: '/auction/load-players' },
  { label: '경매방 입장', to: '/auction/rooms' },
  { label: '매물 관리', to: '/product-manage' },
  { label: '사용자 관리', to: '/user-manage' },
  { label: '이용 가이드', to: '#' },
];

const initialPlayers = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  nickname: `플레이어 ${i + 1}`,
  desc: '',
  line: '',
  price: (i + 3) * 50,
}));

export default function PlayerEditPage() {
  const [players, setPlayers] = useState(initialPlayers);
  const [selectedId, setSelectedId] = useState(initialPlayers[0]?.id ?? null);

  const selectedPlayer = players.find((p) => p.id === selectedId) ?? null;

  const handleFieldChange = (field, value) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === selectedId ? { ...p, [field]: value } : p))
    );
  };

  const totalPoint = players.reduce((sum, p) => sum + Number(p.price || 0), 0);
  const avgPoint = players.length ? Math.round(totalPoint / players.length) : 0;

  return (
    <PageLayout navItems={navItems} className="p-8 bg-white overflow-x-auto">
      <h1 className="text-3xl font-bold text-brand-dark mb-6">경매방 플레이어 수정</h1>

      <PlayerEditFilters
        totalPoint={`${totalPoint.toLocaleString()} pt`}
        avgPoint={`${avgPoint.toLocaleString()} pt`}
      />

      <div className="flex">
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 content-start">
          {players.map((player) => (
            <PlayerEditCard
              key={player.id}
              player={player}
              selected={player.id === selectedId}
              onSelect={() => setSelectedId(player.id)}
            />
          ))}
        </div>

        <PlayerDetailPanel
          player={selectedPlayer}
          onChange={handleFieldChange}
          onSave={() => alert('저장되었습니다.')}
        />
      </div>
    </PageLayout>
  );
}
