/**
 * 플레이어 입찰 - 현재 최고 입찰가/팀 표시 바
 *
 * @param {number} amount    - 현재 최고 입찰가
 * @param {string} team      - 최고 입찰팀 이름
 */
export default function BidCurrentHighest({ amount, team }) {
  return (
    <div className="flex items-center justify-between bg-brand-surface/60 border border-brand-border rounded-xl px-6 py-5">
      <div>
        <div className="text-sm text-brand-muted">현재 최고 입찰가</div>
        <div className="text-3xl font-bold text-brand-dark mt-1">{amount}pt</div>
      </div>
      <div className="text-right">
        <div className="text-sm text-brand-muted">최고 입찰팀</div>
        <div className="text-lg font-semibold text-brand-primary mt-1">{team}</div>
      </div>
    </div>
  );
}
