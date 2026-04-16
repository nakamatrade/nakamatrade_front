import { Megaphone, ImageIcon } from 'lucide-react';
import Header from '@/components/Header';

const navItems = [
  { label: '트레이드 시작', to: '/' },
  { label: '이용 가이드', to: '#' },
  { label: '공지사항', to: '/notice', active: true },
];

// 11개의 샘플 공지
const notices = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  title: `공지사항 ${i + 1}`,
}));

function SideBanner() {
  return (
    <div className="aspect-[300/595] w-full border border-brand-border rounded-md bg-white/60 flex items-center justify-center text-brand-border">
      <ImageIcon className="w-12 h-12" />
    </div>
  );
}

export default function NoticePage() {
  return (
    <div className="page-root">
      <Header navItems={navItems} />

      <main className="flex flex-1 px-8 py-10 gap-8">
        {/* 왼쪽 배너 */}
        <aside className="hidden lg:block w-[200px] shrink-0">
          <SideBanner />
        </aside>

        {/* 중앙 콘텐츠 */}
        <section className="flex-1 max-w-5xl mx-auto">
          <h1 className="flex items-center gap-2 text-3xl font-bold text-brand-dark mb-6">
            <Megaphone className="w-7 h-7 text-brand-accent" />
            Notice
          </h1>

          <ul className="border border-brand-border rounded-xl overflow-hidden bg-white divide-y divide-brand-border">
            {notices.map((item) => (
              <li
                key={item.id}
                className="flex items-center px-4 py-3 cursor-pointer transition-colors hover:bg-brand-surface/50"
              >
                <span className="text-sm text-brand-dark">{item.title}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* 오른쪽 배너 */}
        <aside className="hidden lg:block w-[200px] shrink-0">
          <SideBanner />
        </aside>
      </main>
    </div>
  );
}
