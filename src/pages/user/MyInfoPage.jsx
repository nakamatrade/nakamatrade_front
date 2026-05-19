import { useState } from 'react';
import { Button } from '@/components/ui/button';
import PageLayout from '@/components/common/PageLayout';
import UserIdReadonlyField from '@/components/user/UserIdReadonlyField';
import EmailField from '@/components/user/EmailField';
import PasswordField from '@/components/user/PasswordField';
import PasswordConfirmField from '@/components/user/PasswordConfirmField';
import NicknameField from '@/components/user/NicknameField';

const navItems = [
  { label: '경매방 생성', to: '/auction/rooms' },
  { label: '경매방 입장', to: '/auction/rooms' },
  { label: '매물 관리', to: '/product-manage' },
  { label: '내 정보 관리', to: '/my-info', active: true },
  { label: '대표 프로필 관리', to: '/profile' },
];

/**
 * 내 정보 관리 페이지
 * - ID(읽기 전용), 이메일, 비밀번호, 비밀번호 확인, 닉네임을 수정한다.
 */
export default function MyInfoPage() {
  const [form, setForm] = useState({
    userId: 'nakama_user',
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });

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
    alert('내 정보가 저장되었습니다!');
  };

  return (
    <PageLayout navItems={navItems} className="flex items-center justify-center p-12">
      <form className="w-full max-w-sm flex flex-col gap-10" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold text-brand-dark text-center">내 정보 관리</h1>

        <UserIdReadonlyField value={form.userId} />

        <EmailField value={form.email} onChange={handleChange} />

        <PasswordField value={form.password} onChange={handleChange} />

        <PasswordConfirmField
          value={form.passwordConfirm}
          onChange={handleChange}
          matchStatus={passwordMatchStatus}
        />

        <NicknameField value={form.nickname} onChange={handleChange} />

        <Button type="submit" className="mt-2 w-full">저장</Button>
      </form>
    </PageLayout>
  );
}
