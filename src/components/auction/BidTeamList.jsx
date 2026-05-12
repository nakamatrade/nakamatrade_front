import { cn } from '@/lib/utils';

const STATUS_STYLES = {
  '참여중': 'bg-brand-surface text-brand-dark',
  '입찰중': 'bg-brand-primary/15 text-brand-primary',
  '대기': 'bg-brand-surface text-brand-muted',
  '패스': 'bg-gray-100 text-brand-muted',
};

function TeamRow({ team }) {
  const statusClass = STATUS_STYLES[team.status] ?? STATUS_STYLES['대기'];
  return (
    <div className="grid grid-cols-[120px_1fr_80px_100px] items-center gap-4 py-2 px-3 bg-white border border-brand-border rounded-md">
      <span className="font-semibold text-brand-dark text-sm">{team.name}</span>
      <span className="text-sm text-brand-muted">잔여 {team.remain}pt</span>
      <span className="text-sm text-brand-muted text-center">{team.members}</span>
      <span
        className={cn(
          'text-xs font-semibold text-center px-2 py-1 rounded-full',
          statusClass
        )}
      >
        {team.status}
      </span>
    </div>
  );
}

/**
 * 플레이어 입찰 - 팀별 현황 리스트
 *
 * @param {object[]} teams - { id, name, remain, members, status }
 */
export default function BidTeamList({ teams = [] }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold text-brand-dark">팀별 현황</h2>
      <div className="flex flex-col gap-2">
        {teams.map((t) => (
          <TeamRow key={t.id} team={t} />
        ))}
      </div>
    </div>
  );
}
