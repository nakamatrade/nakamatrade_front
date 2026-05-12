import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const QUICK_BIDS = [
  { label: '최소입찰', delta: 'min' },
  { label: '+10pt', delta: 10 },
  { label: '+50pt', delta: 50 },
  { label: '+100pt', delta: 100 },
];

/**
 * 플레이어 입찰 - 입찰 금액 조절 + 입찰/패스 + 빠른 선택 버튼
 *
 * @param {number}   amount        - 현재 입찰 금액
 * @param {function} onChangeAmount - 금액 변경 (next) => void
 * @param {function} onBid         - 입찰하기 클릭
 * @param {function} onPass        - 패스 클릭
 * @param {number}   minBid        - 최소 입찰 금액
 */
export default function BidActionPanel({ amount, onChangeAmount, onBid, onPass, minBid = 270 }) {
  const handleQuick = (delta) => {
    if (delta === 'min') onChangeAmount(minBid);
    else onChangeAmount(Math.max(0, amount + delta));
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between bg-white border border-brand-border rounded-xl px-2 py-2">
        <button
          type="button"
          onClick={() => onChangeAmount(Math.max(0, amount - 10))}
          className="w-12 h-12 flex items-center justify-center rounded-md hover:bg-brand-surface text-brand-dark"
        >
          <Minus className="w-5 h-5" />
        </button>
        <div className="flex-1 text-center text-3xl font-bold text-brand-dark tabular-nums">
          {amount}pt
        </div>
        <button
          type="button"
          onClick={() => onChangeAmount(amount + 10)}
          className="w-12 h-12 flex items-center justify-center rounded-md hover:bg-brand-surface text-brand-dark"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {QUICK_BIDS.map((q) => (
          <button
            key={q.label}
            type="button"
            onClick={() => handleQuick(q.delta)}
            className="h-10 rounded-md bg-white border border-brand-border text-sm text-brand-dark hover:border-brand-primary hover:text-brand-primary transition-colors"
          >
            {q.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3">
        <Button onClick={onBid} className="col-span-2 h-14 text-base">입찰하기</Button>
        <Button onClick={onPass} variant="outline" className="h-14 text-base">패스</Button>
      </div>
    </div>
  );
}
