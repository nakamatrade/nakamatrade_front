import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/common/PageLayout';
import RandomOrderFeatured from '@/components/auction/RandomOrderFeatured';
import RandomOrderGrid from '@/components/auction/RandomOrderGrid';

const navItems = [
  { label: '경매방 생성', to: '/auction/load-players' },
  { label: '경매방 입장', to: '/auction/rooms' },
  { label: '매물 관리', to: '/product-manage' },
  { label: '사용자 관리', to: '/user-manage' },
  { label: '이용 가이드', to: '#' },
];

const initialPlayers = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  nickname: `플레이어 ${String.fromCharCode(65 + i)}`,
  mostPick: ['챔 1', '챔 2', '챔 3'],
  intro: '소개 글 영역입니다. 플레이어가 자신을 소개하는 글이 표시됩니다.',
}));

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function RandomOrderPage() {
  const navigate = useNavigate();
  const [players, setPlayers] = useState(initialPlayers);

  return (
    <PageLayout navItems={navItems} className="p-8 bg-white overflow-x-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-brand-dark">경매 플레이어 랜덤 순서 지정</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={() => setPlayers((prev) => shuffle(prev))}
            className="gap-2"
          >
            <Shuffle className="w-4 h-4" />
            다시 섞기
          </Button>
          <Button onClick={() => navigate('/auction/bid')}>Next</Button>
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <RandomOrderFeatured player={players[0]} />
        <RandomOrderGrid players={players} columns={5} />
      </div>
    </PageLayout>
  );
}
