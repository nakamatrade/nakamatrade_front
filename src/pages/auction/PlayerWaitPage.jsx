import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/common/PageLayout';
import WaitingParticipants from '@/components/auction/WaitingParticipants';

const navItems = [
  { label: '경매방 생성', to: '/auction/load-players' },
  { label: '경매방 입장', to: '/auction/rooms' },
  { label: '매물 관리', to: '/product-manage' },
  { label: '사용자 관리', to: '/user-manage' },
  { label: '이용 가이드', to: '#' },
];

const sampleParticipants = [
  { id: 1, name: '팀장A' },
  { id: 2, name: '팀장B' },
  { id: 3, name: '팀장C' },
  { id: 4, name: '팀장D' },
];

export default function PlayerWaitPage() {
  const navigate = useNavigate();

  return (
    <PageLayout navItems={navItems} className="flex flex-col items-center justify-center p-12 gap-10">
      <h1 className="text-3xl font-bold text-brand-dark">경매방 참여 대기 중</h1>

      <WaitingParticipants participants={sampleParticipants} maxSlots={10} />

      <div className="flex gap-3 mt-4">
        <Button variant="outline" onClick={() => navigate('/auction/rooms')}>
          나가기
        </Button>
        <Button onClick={() => navigate('/auction/order')}>
          시작하기
        </Button>
      </div>
    </PageLayout>
  );
}
