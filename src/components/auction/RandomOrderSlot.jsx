import { ImageIcon, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * 경매플레이어 랜덤 순서 지정 - 순서 그리드에서 한 자리(슬롯)
 *
 * @param {object|null} player   - { nickname } 또는 null(빈 슬롯)
 * @param {number}      order    - 순서 번호(1-base)
 * @param {boolean}     showPlay - 우측 화살표(다음으로) 표시
 */
export default function RandomOrderSlot({ player, order, showPlay }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className={cn(
          'flex flex-col items-center gap-1 bg-white border rounded-md p-2 w-[120px]',
          player ? 'border-brand-border' : 'border-dashed border-brand-border/60'
        )}
      >
        <div className="relative w-full h-16 rounded bg-brand-surface flex items-center justify-center">
          <ImageIcon className="w-5 h-5 text-brand-light" />
          <span className="absolute top-1 left-1 text-xs font-bold text-brand-primary bg-white border border-brand-border rounded px-1.5">
            {order}
          </span>
        </div>
        <div className="text-xs text-brand-dark font-medium truncate w-full text-center">
          {player?.nickname ?? '비어있음'}
        </div>
      </div>
      {showPlay && <Play className="w-4 h-4 text-brand-muted shrink-0" />}
    </div>
  );
}
