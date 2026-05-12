import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * 경매방 플레이어 수정 - 좌측 그리드의 작은 플레이어 카드
 *
 * @param {object}   player    - 플레이어 데이터 { id, nickname, price }
 * @param {boolean}  selected  - 현재 편집 중인지
 * @param {function} onSelect  - 카드 클릭 핸들러
 */
export default function PlayerEditCard({ player, selected, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        'flex flex-col items-center bg-white border rounded-xl p-3 transition text-left w-full',
        selected
          ? 'border-brand-primary ring-1 ring-brand-primary'
          : 'border-brand-border hover:border-brand-primary/60'
      )}
    >
      <div className="w-20 h-20 rounded-full bg-brand-surface flex items-center justify-center my-2">
        <ImageIcon className="w-6 h-6 text-brand-light" />
      </div>
      <div className="font-semibold text-brand-dark text-sm mt-1">{player.nickname}</div>
      <div className="text-sm text-brand-primary font-medium mt-0.5">{player.price}pt</div>
    </button>
  );
}
