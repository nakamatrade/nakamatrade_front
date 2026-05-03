/**
 * @param {{
 *   selected: Set<number>,
 *   total: number,
 *   onToggleAll: () => void,
 *   onClear: () => void,
 *   onDelete: () => void,
 * }} props
 */
export default function SelectionBar({ selected, total, onToggleAll, onClear, onDelete }) {
  return (
    <div className="flex items-center justify-between py-3 border-t border-b border-brand-border mb-6">
      <label className="flex items-center gap-2 text-sm text-brand-dark cursor-pointer">
        <input
          type="checkbox"
          checked={total > 0 && selected.size === total}
          onChange={onToggleAll}
          className="w-4 h-4 accent-brand-primary"
        />
        <span className="font-semibold">{selected.size}개 선택됨</span>
        <span className="text-brand-muted">/ 전체 {total}개</span>
      </label>

      <div className="flex items-center gap-4 text-sm">
        <button
          onClick={onClear}
          className="text-brand-muted hover:text-brand-dark transition-colors"
        >
          선택 해제
        </button>
        <button
          onClick={onDelete}
          className="text-red-500 hover:text-red-600 font-semibold transition-colors"
        >
          선택 삭제
        </button>
      </div>
    </div>
  );
}
