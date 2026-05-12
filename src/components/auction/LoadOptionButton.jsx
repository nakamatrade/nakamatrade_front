import { Plus } from 'lucide-react';

/**
 * 플레이어 불러오기 옵션 버튼 - 큰 영역의 행동 버튼
 *
 * @param {ReactNode} icon    - 좌측 아이콘 (기본: Plus)
 * @param {string}    label   - 버튼 레이블
 * @param {function}  onClick - 클릭 핸들러
 */
export default function LoadOptionButton({ icon, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full max-w-lg h-24 flex items-center justify-center gap-2 bg-white border-2 border-brand-border rounded-xl text-lg font-semibold text-brand-dark hover:border-brand-primary hover:text-brand-primary transition-colors"
    >
      {icon || <Plus className="w-6 h-6" />}
      {label}
    </button>
  );
}
