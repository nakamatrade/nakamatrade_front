import { ImageIcon, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * 매물 관리 - 카드 뷰 아이템
 *
 * @param {object}   item       - 플레이어 데이터 { id, nickname, desc, teams }
 * @param {boolean}  selected   - 선택 여부
 * @param {function} onToggle   - 체크박스 토글 핸들러
 * @param {function} onMoreClick - 더보기 버튼 클릭 핸들러 (선택)
 */
export default function PlayerCard({ item, selected, onToggle, onMoreClick }) {
  return (
    <div
      className={cn(
        'relative border rounded-xl p-4 bg-white transition',
        selected
          ? 'border-brand-primary ring-1 ring-brand-primary'
          : 'border-brand-border'
      )}
    >
      {/* 체크박스 */}
      <div className="absolute top-3 left-3">
        <input
          type="checkbox"
          checked={selected}
          onChange={onToggle}
          className="w-4 h-4 accent-brand-primary"
        />
      </div>

      {/* 더보기 버튼 */}
      <button
        type="button"
        className="absolute top-3 right-3 text-brand-muted hover:text-brand-dark"
        aria-label="더보기"
        onClick={onMoreClick}
      >
        <MoreHorizontal className="w-5 h-5" />
      </button>

      {/* 아바타 */}
      <div className="w-24 h-24 rounded-full bg-brand-surface flex items-center justify-center mx-auto my-4">
        <ImageIcon className="w-8 h-8 text-brand-light" />
      </div>

      {/* 닉네임 / 소개 */}
      <div className="text-center mb-3">
        <div className="font-bold text-brand-dark">{item.nickname}</div>
        <div className="text-sm text-brand-muted mt-1">{item.desc}</div>
      </div>

      {/* 팀 배지 */}
      <div className="flex justify-center gap-1.5 flex-wrap">
        {item.teams.map((t, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs bg-brand-surface border border-brand-border rounded text-brand-dark"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}