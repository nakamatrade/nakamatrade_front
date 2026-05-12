import { ImageIcon } from 'lucide-react';

/**
 * 플레이어 입찰 - 우측 패널 하단의 다음 경매 대기열
 *
 * @param {object[]} players - { id, name, line, tier }
 */
export default function BidQueuePanel({ players = [] }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-sm font-semibold text-brand-dark">다음 경매 대기열</h2>

      <div className="flex flex-col gap-2">
        {players.map((p, i) => (
          <div
            key={p.id}
            className="flex items-center gap-3 py-2 px-2 bg-white border border-brand-border rounded-md"
          >
            <span className="w-6 h-6 rounded-full bg-brand-surface text-brand-primary font-bold text-xs flex items-center justify-center shrink-0">
              {i + 1}
            </span>
            <div className="w-8 h-8 rounded-full bg-brand-surface flex items-center justify-center shrink-0">
              <ImageIcon className="w-3.5 h-3.5 text-brand-light" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-brand-dark truncate">{p.name}</div>
              <div className="text-xs text-brand-muted truncate">
                {p.line} {p.tier && `· ${p.tier}`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
