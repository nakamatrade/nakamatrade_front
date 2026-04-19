import { ImageIcon, MoreHorizontal } from 'lucide-react';

/**
 * 매물 관리 - 리스트 뷰 아이템
 *
 * @param {object}   item       - 플레이어 데이터 { id, nickname, desc, teams }
 * @param {boolean}  selected   - 선택 여부
 * @param {function} onToggle   - 체크박스 토글 핸들러
 * @param {function} onMoreClick - 더보기 버튼 클릭 핸들러 (선택)
 */
export default function PlayerRow({ item, selected, onToggle, onMoreClick }) {
  return (
    <div className="flex items-center gap-4 py-3 px-4 bg-white hover:bg-brand-surface/40 transition-colors">
      {/* 체크박스 */}
      <input
        type="checkbox"
        checked={selected}
        onChange={onToggle}
        className="w-4 h-4 accent-brand-primary shrink-0"
      />

      {/* 아바타 */}
      <div className="w-10 h-10 rounded-full bg-brand-surface flex items-center justify-center shrink-0">
        <ImageIcon className="w-4 h-4 text-brand-light" />
      </div>

      {/* 닉네임 / 소개 */}
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-brand-dark truncate">{item.nickname}</div>
        <div className="text-sm text-brand-muted truncate">{item.desc}</div>
      </div>

      {/* 팀 배지 */}
      <div className="flex gap-1.5 flex-wrap justify-end max-w-[240px]">
        {item.teams.map((t, i) => (
          <span
            key={i}
            className="px-2 py-0.5 text-xs bg-brand-surface border border-brand-border rounded text-brand-dark whitespace-nowrap"
          >
            {t}
          </span>
        ))}
      </div>

      {/* 더보기 버튼 */}
      <button
        type="button"
        className="text-brand-muted hover:text-brand-dark shrink-0"
        aria-label="더보기"
        onClick={onMoreClick}
      >
        <MoreHorizontal className="w-5 h-5" />
      </button>
    </div>
  );
}