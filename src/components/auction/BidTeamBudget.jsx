function BudgetStat({ label, value }) {
  return (
    <div className="flex-1 bg-white border border-brand-border rounded-xl px-5 py-4">
      <div className="text-sm text-brand-muted">{label}</div>
      <div className="text-2xl font-bold text-brand-dark mt-1 tabular-nums">{value}</div>
    </div>
  );
}

/**
 * 플레이어 입찰 - 내 팀 예산 현황
 *
 * @param {number} total    - 총 예산
 * @param {number} used     - 사용 예산
 * @param {string} composition - 팀원 구성 현황 (예: "2/5 명")
 */
export default function BidTeamBudget({ total, used, composition }) {
  const remain = total - used;
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold text-brand-dark">내 팀 예산 현황</h2>
      <div className="flex gap-3">
        <BudgetStat label="총 예산" value={`${total}pt`} />
        <BudgetStat label="사용" value={`${used}pt`} />
        <BudgetStat label="잔여" value={`${remain}pt`} />
        <BudgetStat label="팀원 구성 현황" value={composition} />
      </div>
    </div>
  );
}
