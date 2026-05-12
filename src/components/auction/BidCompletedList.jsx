import { ImageIcon } from 'lucide-react';

/**
 * 플레이어 입찰 - 좌측 패널 하단의 영입 완료 플레이어 리스트
 *
 * @param {object[]} players - { id, name, team, point }
 */
export default function BidCompletedList({ players = [] }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold text-brand-dark">영입 완료 플레이어</h2>

      <div className="flex flex-col gap-1">
        {players.length === 0 && (
          <p className="text-sm text-brand-muted">아직 영입된 플레이어가 없습니다.</p>
        )}

        {players.map((p) => (
          <div
            key={p.id}
            className="flex items-center gap-3 py-2 px-2 rounded-md hover:bg-brand-surface/40"
          >
            <div className="w-8 h-8 rounded-full bg-brand-surface flex items-center justify-center">
              <ImageIcon className="w-3.5 h-3.5 text-brand-light" />
            </div>
            <span className="text-sm font-semibold text-brand-dark">{p.name}</span>
            <span className="text-xs text-brand-muted ml-auto">
              {p.team} · {p.point}pt
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
