import { ImageIcon, Plus } from 'lucide-react';

/**
 * 대표 프로필 관리 - 주요 챔피언 슬롯 3개
 *
 * @param {(string|null)[]} champions - 현재 선택된 챔피언 이름 (없으면 null)
 * @param {function}        onPick    - 슬롯 클릭 핸들러 (index, current) => void
 * @param {number}          slots     - 슬롯 개수 (기본 3)
 */
export default function ProfileChampionPicker({ champions = [], onPick, slots = 3 }) {
  const filled = Array.from({ length: slots }, (_, i) => champions[i] ?? null);

  return (
    <div className="form-field">
      <label className="text-sm font-medium text-brand-dark">주요 챔피언</label>
      <div className="flex gap-3 justify-center">
        {filled.map((champ, i) => (
          <button
            key={i}
            type="button"
            onClick={() => onPick?.(i, champ)}
            className="w-32 h-32 rounded-md bg-brand-surface border border-brand-border flex flex-col items-center justify-center gap-1 hover:border-brand-primary hover:bg-white transition-colors"
          >
            {champ ? (
              <>
                <ImageIcon className="w-6 h-6 text-brand-light" />
                <span className="text-xs font-medium text-brand-dark">{champ}</span>
              </>
            ) : (
              <>
                <Plus className="w-5 h-5 text-brand-muted" />
                <span className="text-xs text-brand-muted">챔피언 선택</span>
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
