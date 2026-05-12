import { cn } from '@/lib/utils';

/**
 * 플레이어 입찰 - 우측 패널 상단의 실시간 입찰 로그
 *
 * @param {object[]} entries - { id, team, amount, action } action: "입찰" | "패스"
 */
export default function BidLogPanel({ entries = [] }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold text-brand-dark">실시간 입찰 로그</h2>

      <div className="flex flex-col">
        {entries.length === 0 && (
          <p className="text-sm text-brand-muted">입찰 내역이 없습니다.</p>
        )}
        {entries.map((e) => (
          <div
            key={e.id}
            className="flex items-center justify-between py-2 border-b border-brand-border last:border-b-0"
          >
            <span className="font-semibold text-brand-dark text-sm w-12">{e.team}</span>
            <span className="text-sm text-brand-muted flex-1 ml-2">
              {e.amount != null ? `${e.amount}pt` : 'ㅡ'}
            </span>
            <span
              className={cn(
                'text-xs font-semibold px-2 py-0.5 rounded',
                e.action === '입찰'
                  ? 'bg-brand-primary/15 text-brand-primary'
                  : 'bg-gray-100 text-brand-muted'
              )}
            >
              {e.action}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
