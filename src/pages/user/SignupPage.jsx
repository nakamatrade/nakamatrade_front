import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PageLayout from '@/components/common/PageLayout';
import FormField from '@/components/common/FormField';

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
  const [idChecked, setIdChecked] = useState(false);

  const passwordMatch = form.passwordConfirm && form.password === form.passwordConfirm;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === 'userId') setIdChecked(false);
  };

  const handleCheckDuplicate = () => {
    if (form.userId.trim()) setIdChecked(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.userId || !form.password || !form.passwordConfirm || !form.nickname) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    if (form.password !== form.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert('회원가입이 완료되었습니다!');
  };

  return (
    <PageLayout navItems={navItems} className="flex items-center justify-center p-12">
      <form className="w-full max-w-sm flex flex-col gap-5" onSubmit={handleSubmit}>

        {/* ID — 중복 확인 버튼 포함 */}
        <FormField
          label="ID"
          id="userId"
          successMessage={idChecked ? '사용 가능한 ID입니다' : null}
        >
          <div className="flex gap-2">
            <Input
              type="text"
              id="userId"
              name="userId"
              placeholder="아이디 입력"
              value={form.userId}
              onChange={handleChange}
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="shrink-0 h-11"
              onClick={handleCheckDuplicate}
            >
              중복 확인
            </Button>
          </div>
        </FormField>

        {/* 비밀번호 */}
        <FormField label="비밀번호" id="password">
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="비밀번호 입력"
            value={form.password}
            onChange={handleChange}
          />
        </FormField>

        {/* 비밀번호 확인 */}
        <FormField
          label="비밀번호 확인"
          id="passwordConfirm"
          successMessage={passwordMatch ? 'Password 일치' : null}
        >
          <Input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            placeholder="비밀번호 재입력"
            value={form.passwordConfirm}
            onChange={handleChange}
          />
        </FormField>

        {/* 닉네임 */}
        <FormField label="닉네임" id="nickname">
          <Input
            type="text"
            id="nickname"
            name="nickname"
            placeholder="닉네임 입력"
            value={form.nickname}
            onChange={handleChange}
          />
        </FormField>

        <Button type="submit" className="mt-2 w-full">
          회원가입
        </Button>
      </form>
    </PageLayout>
  );
}