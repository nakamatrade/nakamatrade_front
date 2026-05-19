import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * [임시] 모든 페이지에 빠르게 이동할 수 있는 플로팅 미리보기 메뉴.
 *
 * - 화면 우측 하단에 토글 버튼이 떠 있으며, 클릭하면 모든 라우트 목록이 열립니다.
 * - 디자인 검수가 끝나면 App.jsx에서 <DevQuickNav /> 한 줄만 제거하면 사라집니다.
 */
const ROUTES = [
  { group: '공통', items: [
    { label: '초기진입 화면', to: '/' },
    { label: '회원가입', to: '/signup' },
    { label: '공지사항', to: '/notice' },
  ]},
  { group: '사용자', items: [
    { label: '내 정보 관리', to: '/my-info' },
    { label: '대표 프로필 관리', to: '/profile' },
    { label: '사용자 관리(기존)', to: '/user-manage' },
  ]},
  { group: '매물', items: [
    { label: '매물 관리', to: '/product-manage' },
  ]},
  { group: '경매 플로우', items: [
    { label: '① 경매방 목록', to: '/auction/rooms' },
    { label: '② 플레이어 불러오기', to: '/auction/load-players' },
    { label: '③ 플레이어 수정', to: '/auction/edit-players' },
    { label: '④ 참여 대기', to: '/auction/waiting' },
    { label: '⑤ 랜덤 순서 지정', to: '/auction/order' },
    { label: '⑥ 플레이어 입찰', to: '/auction/bid' },
  ]},
];

export default function DevQuickNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      {/* 토글 버튼 */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? '미리보기 메뉴 닫기' : '미리보기 메뉴 열기'}
        className="fixed bottom-5 right-5 z-50 w-12 h-12 rounded-full bg-brand-accent text-white shadow-lg hover:bg-brand-accent-hover flex items-center justify-center"
      >
        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* 패널 */}
      {open && (
        <div className="fixed bottom-20 right-5 z-50 w-72 max-h-[70vh] overflow-y-auto bg-white border border-brand-border rounded-xl shadow-2xl p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold text-brand-dark">임시 미리보기</span>
            <span className="text-[10px] text-brand-muted">TEMP / DEV</span>
          </div>

          <div className="flex flex-col gap-4">
            {ROUTES.map((group) => (
              <div key={group.group}>
                <div className="text-xs font-semibold text-brand-muted mb-1.5">
                  {group.group}
                </div>
                <ul className="flex flex-col gap-1">
                  {group.items.map((item) => {
                    const active = pathname === item.to;
                    return (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className={cn(
                            'block px-3 py-1.5 rounded-md text-sm transition-colors',
                            active
                              ? 'bg-brand-primary text-white font-semibold'
                              : 'text-brand-dark hover:bg-brand-surface'
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
