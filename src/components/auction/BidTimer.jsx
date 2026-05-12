/**
 * 플레이어 입찰 - 남은 입찰 시간 표시 + 진행률 슬라이더
 *
 * @param {number} seconds   - 남은 초
 * @param {number} totalSeconds - 전체 초 (기본 30)
 */
export default function BidTimer({ seconds, totalSeconds = 30 }) {
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');
  const percent = Math.max(0, Math.min(100, (seconds / totalSeconds) * 100));

  return (
    <div className="flex flex-col gap-3">
      <div className="text-center">
        <div className="text-sm font-semibold text-brand-muted">남은 입찰 시간</div>
        <div className="text-5xl font-bold text-brand-dark mt-1 tabular-nums">
          {mm} : {ss}
        </div>
      </div>

      <div className="h-2 bg-brand-surface rounded-full overflow-hidden">
        <div
          className="h-full bg-brand-primary transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
