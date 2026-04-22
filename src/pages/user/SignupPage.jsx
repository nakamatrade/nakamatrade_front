import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/common/PageLayout';
import UserIdField from '@/components/user/UserIdField';
import PasswordField from '@/components/user/PasswordField';
import PasswordConfirmField from '@/components/user/PasswordConfirmField';
import NicknameField from '@/components/user/NicknameField';

const navItems = [
  { label: '경매방 생성', to: '#' },
  { label: '경매방 입장', to: '#', active: true },
  { label: '매물 관리', to: '/product-manage' },
  { label: '사용자 관리', to: '/user-manage' },
  { label: '이용 가이드', to: '#' },
];

export default function SignupPage() {
  const [form, setForm] = useState({
    userId: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });

  // 'idle' | 'available' | 'unavailable'
  const [idCheckStatus, setIdCheckStatus] = useState('idle');

  // 'idle' | 'match' | 'mismatch'
  const passwordMatchStatus = !form.passwordConfirm
    ? 'idle'
    : form.password === form.passwordConfirm
      ? 'match'
      : 'mismatch';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // ID가 변경되면 확인 상태 초기화
    if (name === 'userId') setIdCheckStatus('idle');
  };

  // TODO: API 연동 시 아래 주석을 해제하고 임시 setIdCheckStatus('available') 제거
  const handleCheckDuplicate = async () => {
    if (!form.userId.trim()) return;
    // const isDuplicate = await checkUserIdApi(form.userId);
    // setIdCheckStatus(isDuplicate ? 'unavailable' : 'available');
    setIdCheckStatus('available');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.userId || !form.password || !form.passwordConfirm || !form.nickname) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    if (idCheckStatus !== 'available') {
      alert('ID 중복 확인을 해주세요.');
      return;
    }
    if (passwordMatchStatus !== 'match') {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert('회원가입이 완료되었습니다!');
  };

  return (
    <PageLayout navItems={navItems} className="flex items-center justify-center p-12">
      <form className="w-full max-w-sm flex flex-col gap-6" onSubmit={handleSubmit}>

        <UserIdField
          value={form.userId}
          onChange={handleChange}
          checkStatus={idCheckStatus}
          onCheckDuplicate={handleCheckDuplicate}
        />

        <NicknameField
          value={form.nickname}
          onChange={handleChange}
        />

        <PasswordField
          value={form.password}
          onChange={handleChange}
        />

        <PasswordConfirmField
          value={form.passwordConfirm}
          onChange={handleChange}
          matchStatus={passwordMatchStatus}
        />

        <Button type="submit" className="mt-2 w-full">
          회원가입
        </Button>
      </form>
    </PageLayout>
  );
}
