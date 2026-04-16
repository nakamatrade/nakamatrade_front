import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

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
    if (form.userId.trim()) {
      setIdChecked(true);
    }
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
    <div className="page-root">
      <Header navItems={navItems} />

      <div className="flex flex-1">
        <Sidebar activeItem="Home" />

        <main className="flex-1 flex items-center justify-center p-12">
          <form
            className="w-full max-w-sm flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            {/* ID */}
            <div className="form-field">
              <Label htmlFor="userId">ID</Label>
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
              {idChecked && (
                <div className="field-feedback-success">
                  <CheckCircle className="w-4 h-4" />
                  <span>사용 가능한 ID입니다</span>
                </div>
              )}
            </div>

            {/* 비밀번호 */}
            <div className="form-field">
              <Label htmlFor="password">비밀번호</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호 입력"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            {/* 비밀번호 확인 */}
            <div className="form-field">
              <Label htmlFor="passwordConfirm">비밀번호 확인</Label>
              <Input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="비밀번호 재입력"
                value={form.passwordConfirm}
                onChange={handleChange}
              />
              {passwordMatch && (
                <div className="field-feedback-success">
                  <CheckCircle className="w-4 h-4" />
                  <span>Password 일치</span>
                </div>
              )}
            </div>

            {/* 닉네임 */}
            <div className="form-field">
              <Label htmlFor="nickname">닉네임</Label>
              <Input
                type="text"
                id="nickname"
                name="nickname"
                placeholder="닉네임 입력"
                value={form.nickname}
                onChange={handleChange}
              />
            </div>

            {/* 회원가입 버튼 */}
            <Button type="submit" className="mt-2 w-full">
              회원가입
            </Button>
          </form>
        </main>
      </div>
    </div>
  );
}
