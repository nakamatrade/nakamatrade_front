import { cn } from '@/lib/utils';

/**
 * 소셜 로그인 버튼 (랜딩 페이지)
 *
 * @param {string}    label     - 접근성용 버튼 라벨 (aria-label)
 * @param {string}    className - 배경색 등 브랜드별 스타일
 * @param {ReactNode} svg       - 소셜 서비스 로고 SVG
 * @param {function}  [onClick] - 클릭 핸들러
 */
export default function SocialButton({ label, className, svg, onClick }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn('social-btn', className)}
      onClick={onClick}
    >
      {svg}
    </button>
  );
}