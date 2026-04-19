import { Link } from 'react-router-dom';
import { ImageIcon } from 'lucide-react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import SocialButton from '@/components/common/SocialButton';

const navItems = [
  { label: '트레이드 시작', to: '/', active: true },
  { label: '이용 가이드', to: '#' },
  { label: '공지사항', to: '/notice' },
];

const socialButtons = [
  {
    label: 'Google',
    className: 'bg-white border border-brand-border hover:bg-brand-surface',
    svg: (
      <svg viewBox="0 0 48 48" className="w-5 h-5">
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
      </svg>
    ),
  },
  {
    label: 'Kakao',
    className: 'bg-[#FEE500] border border-[#FEE500] hover:bg-[#f0d800]',
    svg: (
      <svg viewBox="0 0 48 48" className="w-5 h-5">
        <path fill="#3C1E1E" d="M24,6C13.457,6,5,12.686,5,20.916c0,5.284,3.5,9.928,8.762,12.575l-2.2,8.143c-0.178,0.659,0.576,1.186,1.143,0.802l9.637-6.42C23.111,36.1,23.871,36.136,24,36.136c10.543,0,19-6.686,19-14.916S34.543,6,24,6z" />
      </svg>
    ),
  },
  {
    label: 'Naver',
    className: 'bg-[#03C75A] hover:bg-[#02b350]',
    svg: (
      <svg viewBox="0 0 48 48" className="w-5 h-5">
        <path fill="#FFFFFF" d="M28.5,24.9L19.2,12H12v24h7.5V23.1L28.8,36H36V12h-7.5V24.9z" />
      </svg>
    ),
  },
  {
    label: 'Discord',
    className: 'bg-[#5865F2] hover:bg-[#4752c4]',
    svg: (
      <svg viewBox="0 0 48 48" className="w-5 h-5">
        <path fill="#FFFFFF" d="M36.83,11.12a29.15,29.15,0,0,0-7.19-2.23,21.85,21.85,0,0,0-1,2,27.06,27.06,0,0,0-8.13,0,20.83,20.83,0,0,0-1-2A29.08,29.08,0,0,0,12.33,11.13,30.13,30.13,0,0,0,7.1,32.33a29.38,29.38,0,0,0,8.97,4.54,22.17,22.17,0,0,0,1.93-3.14,19,19,0,0,1-3.05-1.46c.26-.19.51-.38.75-.58a20.87,20.87,0,0,0,17.92,0c.25.2.5.4.75.58a19.13,19.13,0,0,1-3.06,1.47,22.09,22.09,0,0,0,1.93,3.13,29.32,29.32,0,0,0,8.97-4.53A30.06,30.06,0,0,0,36.83,11.12ZM18.34,28.12a3.47,3.47,0,0,1-3.24-3.6,3.46,3.46,0,0,1,3.24-3.6,3.44,3.44,0,0,1,3.24,3.6A3.46,3.46,0,0,1,18.34,28.12Zm11.32,0a3.47,3.47,0,0,1-3.24-3.6,3.46,3.46,0,0,1,3.24-3.6,3.44,3.44,0,0,1,3.24,3.6A3.45,3.45,0,0,1,29.66,28.12Z" />
      </svg>
    ),
  },
];

export default function LandingPage() {
  return (
    <div className="page-root">
      <Header navItems={navItems} />

      <main className="flex flex-1 items-center justify-center gap-16 px-12 py-16">
        {/* 왼쪽: 이미지 플레이스홀더 */}
        <div className="flex-1 max-w-lg">
          <div className="aspect-square max-w-md mx-auto border-2 border-dashed border-brand-border rounded-2xl flex items-center justify-center bg-white/60">
            <ImageIcon className="w-20 h-20 text-brand-border" />
          </div>
        </div>

        {/* 오른쪽: 콘텐츠 */}
        <div className="flex flex-col gap-6 flex-1 max-w-md">
          <p className="text-xs font-semibold text-brand-primary tracking-[0.2em] uppercase">
            TEAM AUCTION PLATFORM
          </p>

          <h1 className="text-4xl font-bold leading-tight text-brand-dark">
            팀원을 경매로 영입하고,<br />최고의 팀을 완성하세요
          </h1>

          <p className="text-brand-muted leading-relaxed">
            LoL · 발로란트 · 오버워치<br />경매 방식으로 팀을 꾸리는 색다른 경험
          </p>

          <div className="flex gap-3">
            <Button asChild>
              <Link to="/signup">회원가입</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="#">로그인</Link>
            </Button>
          </div>

          <div className="flex items-center gap-3">
            <Separator className="flex-1 bg-brand-border" />
            <span className="text-sm text-brand-muted whitespace-nowrap">또는 간편 로그인</span>
            <Separator className="flex-1 bg-brand-border" />
          </div>

          <div className="flex gap-3">
            {socialButtons.map((btn) => (
              <SocialButton key={btn.label} {...btn} />
            ))}
          </div>
        </div>
      </main>

      <footer className="h-14 border-t border-brand-border" />
    </div>
  );
}