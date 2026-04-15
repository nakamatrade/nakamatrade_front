import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const navItems = [
  { label: '경매방 생성', to: '#' },
  { label: '경매방 입장', to: '#' },
  { label: '매물 관리', to: '#' },
  { label: '사용자 관리', to: '/user-manage', active: true },
  { label: '이용 가이드', to: '#' },
];

export default function UserManagePage() {
  const [form, setForm] = useState({
    userId: 'nakama_user',   // 기존 사용자 ID (수정 불가)
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
  });
  const passwordMatch = form.passwordConfirm && form.password === form.passwordConfirm;

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
    if (form.password !== form.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    alert('사용자 정보가 저장되었습니다!');
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
            {/* ID — 수정 불가 */}
            <div className="form-field">
              <Label htmlFor="userId">ID</Label>
              <Input
                type="text"
                id="userId"
                name="userId"
                value={form.userId}
                disabled
                className="bg-muted text-muted-foreground cursor-not-allowed"
              />
            </div>

            {/* 이메일 */}
            <div className="form-field">
              <Label htmlFor="email">이메일</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Input text"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            {/* 비밀번호 */}
            <div className="form-field">
              <Label htmlFor="password">비밀번호</Label>
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Input text"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            {/* 비밀번호 확인 */}
            <div className="form-field">
              <Label htmlFor="passwordConfirm">비밀번호확인</Label>
              <Input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="Input text"
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
                placeholder="Input text"
                value={form.nickname}
                onChange={handleChange}
              />
            </div>

            {/* 저장 버튼 */}
            <Button type="submit" variant="outline" className="mt-2 w-full">
              저장
            </Button>
          </form>
        </main>
      </div>
    </div>
  );
}
