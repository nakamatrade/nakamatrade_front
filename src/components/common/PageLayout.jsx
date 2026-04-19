import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

/**
 * Header + Sidebar를 포함한 표준 페이지 레이아웃
 *
 * @param {object[]} navItems   - Header에 전달할 네비게이션 항목 배열
 * @param {string}   activeItem - Sidebar에서 강조할 메뉴 항목 (기본값: 'Home')
 * @param {string}   className  - main 태그에 추가할 클래스
 * @param {ReactNode} children  - main 영역에 렌더링할 콘텐츠
 */
export default function PageLayout({ navItems, activeItem = 'Home', className = '', children }) {
  return (
    <div className="page-root">
      <Header navItems={navItems} />
      <div className="flex flex-1">
        <Sidebar activeItem={activeItem} />
        <main className={`flex-1 ${className}`}>
          {children}
        </main>
      </div>
    </div>
  );
}