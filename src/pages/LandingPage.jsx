import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import LandingVisual from '@/components/landing/LandingVisual';
import SocialLoginSection from '@/components/landing/SocialLoginSection';

const navItems = [
  { label: '트레이드 시작', to: '/auction/load-players' },
  { label: '이용 가이드', to: '#' },
  { label: '공지사항', to: '/notice' },
];

export default function LandingPage() {
  return (
    <div className="page-root">
      <Header navItems={navItems} />

      <main className="flex flex-1 items-center justify-center gap-16 px-12 py-16">
        <LandingVisual />

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

          <SocialLoginSection />
        </div>
      </main>

      <footer className="h-14 border-t border-brand-border" />
    </div>
  );
}
