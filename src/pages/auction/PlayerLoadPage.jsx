import { useNavigate } from 'react-router-dom';
import PageLayout from '@/components/common/PageLayout';
import LoadOptionButton from '@/components/auction/LoadOptionButton';

const navItems = [
  { label: '경매방 생성', to: '/auction/load-players' },
  { label: '경매방 입장', to: '/auction/rooms' },
  { label: '매물 관리', to: '/product-manage' },
  { label: '사용자 관리', to: '/user-manage' },
  { label: '이용 가이드', to: '#' },
];

export default function PlayerLoadPage() {
  const navigate = useNavigate();

  return (
    <PageLayout navItems={navItems} className="flex flex-col items-center justify-center gap-8 p-12">
      <h1 className="text-3xl font-bold text-brand-dark">플레이어 불러오기</h1>
      <p className="text-brand-muted">경매방에 참여할 플레이어 데이터를 선택하세요.</p>

      <div className="flex flex-col items-center gap-5 w-full mt-4">
        <LoadOptionButton
          label="+ 내 플레이어 세트 불러오기"
          onClick={() => navigate('/auction/edit-players')}
        />
        <LoadOptionButton
          label="+ 지난 경매에서 불러오기"
          onClick={() => navigate('/auction/edit-players')}
        />
      </div>
    </PageLayout>
  );
}
