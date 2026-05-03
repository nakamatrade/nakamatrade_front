import { useState } from 'react';
import { Megaphone } from 'lucide-react';
import Header from '@/components/Header';
import SideBanner from '@/components/notice/SideBanner';
import NoticeSearch from '@/components/notice/NoticeSearch';
import NoticeList from '@/components/notice/NoticeList';
import NoticeDetail from '@/components/notice/NoticeDetail';

const navItems = [
  { label: '트레이드 시작', to: '/' },
  { label: '이용 가이드', to: '#' },
  { label: '공지사항', to: '/notice', active: true },
];

const allNotices = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  title: `공지사항 ${i + 1}`,
}));

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
        <aside className="hidden lg:block w-[200px] shrink-0">
          <SideBanner />
        </aside>

        <section className="flex-1 max-w-5xl mx-auto">
          <h1 className="flex items-center gap-2 text-3xl font-bold text-brand-dark mb-6">
            <Megaphone className="w-7 h-7 text-brand-accent" />
            Notice
          </h1>

          <NoticeSearch
            value={search}
            onChange={(v) => { setSearch(v); setSelectedId(null); }}
          />

          <NoticeList
            items={filtered}
            selectedId={selectedId}
            onSelect={(id) => setSelectedId(selectedId === id ? null : id)}
          />

          <NoticeDetail notice={allNotices.find((n) => n.id === selectedId)} />
        </section>

        <aside className="hidden lg:block w-[200px] shrink-0">
          <SideBanner />
        </aside>
      </main>
    </div>
  );
}
