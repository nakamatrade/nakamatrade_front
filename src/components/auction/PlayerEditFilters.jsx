import { ChevronDown } from 'lucide-react';

function SelectBox({ label, value }) {
  return (
    <button
      type="button"
      className="h-11 flex items-center justify-between gap-3 border border-brand-border rounded-md px-3 bg-white text-sm hover:border-brand-primary transition-colors min-w-[180px]"
    >
      <span className={value ? 'text-brand-dark' : 'text-brand-muted'}>
        {value || label}
      </span>
      <ChevronDown className="w-4 h-4 text-brand-muted" />
    </button>
  );
}

function StatBox({ label, value }) {
  return (
    <div className="h-11 flex items-center gap-2 border border-brand-border rounded-md px-3 bg-brand-surface/40 text-sm min-w-[180px]">
      <span className="text-brand-muted">{label}</span>
      <span className="font-semibold text-brand-dark ml-auto">{value}</span>
    </div>
  );
}

/**
 * 경매방 플레이어 수정 - 상단 필터/통계 바
 *
 * @param {string} totalPoint
 * @param {string} avgPoint
 */
export default function PlayerEditFilters({ totalPoint = '5,800 pt', avgPoint = '720 pt' }) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      <SelectBox label="라인 선택" />
      <StatBox label="Total Point" value={totalPoint} />
      <StatBox label="팀장 평균 Point" value={avgPoint} />
      <SelectBox label="정렬 선택" />
    </div>
  );
}
