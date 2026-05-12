import { ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * 경매방 카드 - 경매방 목록에서 표시되는 한 개의 방
 *
 * @param {object}   room      - 방 데이터 { id, name, desc }
 * @param {boolean}  selected  - 선택 여부
 * @param {function} onToggle  - 체크박스 토글 핸들러
 * @param {function} onEnter   - 카드 클릭(입장) 핸들러
 */
export default function AuctionRoomCard({ room, selected, onToggle, onEnter }) {
  return (
    <div
      className={cn(
        'relative bg-white border rounded-xl p-4 transition cursor-pointer',
        selected
          ? 'border-brand-primary ring-1 ring-brand-primary'
          : 'border-brand-border hover:border-brand-primary/60'
      )}
      onClick={onEnter}
    >
      <div className="absolute top-3 left-3" onClick={(e) => e.stopPropagation()}>
        <input
          type="checkbox"
          checked={selected}
          onChange={onToggle}
          className="w-4 h-4 accent-brand-primary"
        />
      </div>

      <div className="w-28 h-28 rounded-full bg-brand-surface flex items-center justify-center mx-auto my-5">
        <ImageIcon className="w-8 h-8 text-brand-light" />
      </div>

      <div className="text-center">
        <div className="font-bold text-brand-dark">{room.name}</div>
        <div className="text-sm text-brand-muted mt-2 line-clamp-2 min-h-[2.5rem]">
          {room.desc}
        </div>
      </div>
    </div>
  );
}
