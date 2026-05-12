import { useEffect, useState } from 'react';
import PageLayout from '@/components/common/PageLayout';
import BidCurrentPlayer from '@/components/auction/BidCurrentPlayer';
import BidCompletedList from '@/components/auction/BidCompletedList';
import BidTimer from '@/components/auction/BidTimer';
import BidCurrentHighest from '@/components/auction/BidCurrentHighest';
import BidActionPanel from '@/components/auction/BidActionPanel';
import BidTeamBudget from '@/components/auction/BidTeamBudget';
import BidTeamList from '@/components/auction/BidTeamList';
import BidLogPanel from '@/components/auction/BidLogPanel';
import BidQueuePanel from '@/components/auction/BidQueuePanel';

const navItems = [
  { label: '경매방 생성', to: '/auction/load-players' },
  { label: '경매방 입장', to: '/auction/rooms' },
  { label: '매물 관리', to: '/product-manage' },
  { label: '사용자 관리', to: '/user-manage' },
  { label: '이용 가이드', to: '#' },
];

const currentPlayer = {
  nickname: '플레이어 닉네임',
  line: '미드라이너',
  tier: '암살자',
  mainChampions: ['챔 1', '챔 2', '챔 3'],
};

const completedPlayers = [
  { id: 1, name: '플레이어A', team: '팀A', point: 180 },
  { id: 2, name: '플레이어B', team: '팀C', point: 150 },
];

const teams = [
  { id: 'A', name: '팀A (내 팀)', remain: 600, members: '2/5명', status: '참여중' },
  { id: 'B', name: '팀B', remain: 380, members: '3/5명', status: '입찰중' },
  { id: 'C', name: '팀C', remain: 750, members: '1/5명', status: '대기' },
  { id: 'D', name: '팀D', remain: 180, members: '4/5명', status: '패스' },
];

const initialLog = [
  { id: 1, team: '팀B', amount: 250, action: '입찰' },
  { id: 2, team: '팀A', amount: 200, action: '입찰' },
  { id: 3, team: '팀C', amount: null, action: '패스' },
];

const queue = [
  { id: 1, name: '플레이어C', line: '탑', tier: '마스터' },
  { id: 2, name: '플레이어D', line: '정글', tier: '다이아몬드1' },
  { id: 3, name: '플레이어E', line: '원딜', tier: '플래티넘1' },
];

export default function PlayerBidPage() {
  const [bidAmount, setBidAmount] = useState(270);
  const [seconds, setSeconds] = useState(15);
  const [log, setLog] = useState(initialLog);

  useEffect(() => {
    if (seconds <= 0) return;
    const t = setInterval(() => setSeconds((s) => Math.max(0, s - 1)), 1000);
    return () => clearInterval(t);
  }, [seconds]);

  const handleBid = () => {
    setLog((prev) => [
      { id: Date.now(), team: '팀A', amount: bidAmount, action: '입찰' },
      ...prev,
    ]);
  };

  const handlePass = () => {
    setLog((prev) => [
      { id: Date.now(), team: '팀A', amount: null, action: '패스' },
      ...prev,
    ]);
  };

  return (
    <PageLayout navItems={navItems} className="p-6 bg-white overflow-x-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_minmax(0,1fr)_300px] gap-6">
        {/* 좌측 패널 */}
        <aside className="flex flex-col gap-6 bg-brand-surface/30 border border-brand-border rounded-xl p-4">
          <BidCurrentPlayer player={currentPlayer} />
          <hr className="border-brand-border" />
          <BidCompletedList players={completedPlayers} />
        </aside>

        {/* 중앙 패널 */}
        <section className="flex flex-col gap-6 bg-white border border-brand-border rounded-xl p-6">
          <BidTimer seconds={seconds} totalSeconds={30} />
          <BidCurrentHighest amount={250} team="팀B" />
          <BidActionPanel
            amount={bidAmount}
            onChangeAmount={setBidAmount}
            onBid={handleBid}
            onPass={handlePass}
          />
          <hr className="border-brand-border" />
          <BidTeamBudget total={1000} used={400} composition="2/5 명" />
          <hr className="border-brand-border" />
          <BidTeamList teams={teams} />
        </section>

        {/* 우측 패널 */}
        <aside className="flex flex-col gap-6 bg-brand-surface/30 border border-brand-border rounded-xl p-4">
          <BidLogPanel entries={log} />
          <hr className="border-brand-border" />
          <BidQueuePanel players={queue} />
        </aside>
      </div>
    </PageLayout>
  );
}
