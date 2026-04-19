import { useState } from 'react';
import { Megaphone, ImageIcon, Search } from 'lucide-react';
import Header from '@/components/Header';
import { Input } from '@/components/ui/input';

const navItems = [
  { label: '트레이드 시작', to: '/' },
  { label: '이용 가이드', to: '#' },
  { label: '공지사항', to: '/notice', active: true },
];

const allNotices = Array.from({ length: 11 }, (_, i) => ({
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
  const [search, setSearch] = useState('');
  const [selectedId, setSelectedId] = useState(null);

  const filtered = allNotices.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  );

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

          {/* 검색 */}
          <div className="relative mb-4 max-w-sm">
            <Input
              placeholder="공지사항 검색"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelectedId(null);
              }}
              className="pr-10"
            />
            <Search className="w-4 h-4 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {filtered.length === 0 ? (
            <p className="text-sm text-brand-muted py-6 text-center">검색 결과가 없습니다.</p>
          ) : (
            <ul className="border border-brand-border rounded-xl overflow-hidden bg-white divide-y divide-brand-border">
              {filtered.map((item) => (
                <li
                  key={item.id}
                  onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
                  className={`flex items-center px-4 py-3 cursor-pointer transition-colors ${
                    selectedId === item.id
                      ? 'bg-brand-surface text-brand-primary font-semibold'
                      : 'hover:bg-brand-surface/50 text-brand-dark'
                  }`}
                >
                  <span className="text-sm">{item.title}</span>
                </li>
              ))}
            </ul>
          )}

          {/* 선택된 공지 상세 영역 */}
          {selectedId !== null && (
            <div className="mt-4 p-5 border border-brand-border rounded-xl bg-white">
              <h2 className="font-bold text-brand-dark mb-2">
                {allNotices.find((n) => n.id === selectedId)?.title}
              </h2>
              <p className="text-sm text-brand-muted">공지사항 상세 내용이 여기에 표시됩니다.</p>
            </div>
          )}
        </section>

        {/* 오른쪽 배너 */}
        <aside className="hidden lg:block w-[200px] shrink-0">
          <SideBanner />
        </aside>
      </main>
    </div>
  );
}