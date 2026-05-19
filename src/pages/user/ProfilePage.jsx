import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/common/PageLayout';
import ProfileGameSelect from '@/components/user/ProfileGameSelect';
import ProfileAvatar from '@/components/user/ProfileAvatar';
import ProfileLineSelect from '@/components/user/ProfileLineSelect';
import ProfileChampionPicker from '@/components/user/ProfileChampionPicker';
import PlayerNicknameField from '@/components/user/PlayerNicknameField';
import PlayerIntroField from '@/components/user/PlayerIntroField';

const navItems = [
  { label: '경매방 생성', to: '/auction/rooms' },
  { label: '경매방 입장', to: '/auction/rooms' },
  { label: '매물 관리', to: '/product-manage' },
  { label: '내 정보 관리', to: '/my-info' },
  { label: '대표 프로필 관리', to: '/profile', active: true },
];

const GAMES = ['리그오브레전드', '발로란트', '오버워치', '이터널리턴'];

// 게임별 라인 옵션 (간단화). 실제 구현 시 API로 받아온다.
const LINES_BY_GAME = {
  '리그오브레전드': ['탑', '정글', '미드', '원딜', '서포터'],
  '발로란트': ['듀얼리스트', '컨트롤러', '센티넬', '이니시에이터'],
  '오버워치': ['탱커', '딜러', '힐러'],
  '이터널리턴': ['근거리', '원거리'],
};

/**
 * 대표 프로필 관리 페이지
 * - 게임 별로 닉네임, 소개, 라인, 주요 챔피언을 등록한다.
 */
export default function ProfilePage() {
  const [game, setGame] = useState(GAMES[0]);
  const [form, setForm] = useState({
    nickname: '',
    intro: '',
    mainLine: '',
    subLine: '',
    champions: [null, null, null],
  });

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target?.value ?? e }));
  };

  const handleLineChange = (field) => (v) => {
    setForm((prev) => ({ ...prev, [field]: v }));
  };

  const handlePickChampion = (index) => {
    const next = prompt('챔피언 이름을 입력하세요');
    if (next == null) return;
    setForm((prev) => {
      const champs = [...prev.champions];
      champs[index] = next.trim() || null;
      return { ...prev, champions: champs };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nickname || !form.mainLine) {
      alert('닉네임과 주 포지션은 필수 입력 항목입니다.');
      return;
    }
    alert(`[${game}] 대표 프로필이 저장되었습니다.`);
  };

  const lineOptions = LINES_BY_GAME[game] ?? [];

  return (
    <PageLayout navItems={navItems} className="flex justify-center p-8 overflow-y-auto">
      <form
        className="w-full max-w-3xl flex flex-col gap-6"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold text-brand-dark text-center">대표 프로필 관리</h1>

        <div className="flex justify-center">
          <ProfileGameSelect
            games={GAMES}
            value={game}
            onChange={(g) => {
              setGame(g);
              // 게임이 바뀌면 게임 종속 필드 초기화
              setForm((prev) => ({ ...prev, mainLine: '', subLine: '', champions: [null, null, null] }));
            }}
          />
        </div>

        <div className="bg-white border border-brand-border rounded-2xl p-8 flex flex-col gap-6">
          <ProfileAvatar src={null} onPick={() => alert('프로필 사진 업로드')} />

          <PlayerNicknameField
            value={form.nickname}
            onChange={handleChange('nickname')}
          />

          <PlayerIntroField
            value={form.intro}
            onChange={handleChange('intro')}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProfileLineSelect
              label="주 포지션"
              options={lineOptions}
              value={form.mainLine}
              onChange={handleLineChange('mainLine')}
            />
            <ProfileLineSelect
              label="부 포지션"
              options={lineOptions}
              value={form.subLine}
              onChange={handleLineChange('subLine')}
            />
          </div>

          <ProfileChampionPicker
            champions={form.champions}
            onPick={handlePickChampion}
          />
        </div>

        <Button type="submit" className="w-full max-w-sm mx-auto">저장</Button>
      </form>
    </PageLayout>
  );
}
