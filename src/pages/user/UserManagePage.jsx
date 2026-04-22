import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/common/PageLayout';
import UserIdReadonlyField from '@/components/user/UserIdReadonlyField';
import EmailField from '@/components/user/EmailField';
import PasswordField from '@/components/user/PasswordField';
import PasswordConfirmField from '@/components/user/PasswordConfirmField';
import NicknameField from '@/components/user/NicknameField';

const navItems = [
  { label: '경매방 생성', to: '#' },
  { label: '경매방 입장', to: '#' },
  { label: '매물 관리', to: '/product-manage' },
  { label: '사용자 관리', to: '/user-manage', active: true },
  { label: '이용 가이드', to: '#' },
];

export default function UserManagePage() {
  const [form, setForm] = useState({
    userId: 'nakama_user', // 수정 불가
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });

  // 'idle' | 'match' | 'mismatch'
  const passwordMatchStatus = !form.passwordConfirm
    ? 'idle'
    : form.password === form.passwordConfirm
      ? 'match'
      : 'mismatch';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password || !form.passwordConfirm || !form.nickname) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    if (passwordMatchStatus !== 'match') {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert('사용자 정보가 저장되었습니다!');
  };

  return (
    <PageLayout navItems={navItems} className="flex items-center justify-center p-12">
      <form className="w-full max-w-sm flex flex-col gap-10" onSubmit={handleSubmit}>

        <UserIdReadonlyField value={form.userId} />

        <EmailField
          value={form.email}
          onChange={handleChange}
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

        <Button type="submit" variant="outline" className="mt-2 w-full">
          저장
        </Button>
      </form>
    </PageLayout>
  );
}
