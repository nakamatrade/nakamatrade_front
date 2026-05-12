import { ImageIcon } from 'lucide-react';

/**
 * 경매플레이어 랜덤 순서 지정 - 상단에 강조 표시되는 현재 픽 카드
 *
 * @param {object} player - { nickname, mostPick, intro }
 */
export default function RandomOrderFeatured({ player }) {
  if (!player) return null;
  return (
    <div className="bg-white border border-brand-border rounded-xl p-6 flex gap-6">
      <div className="flex flex-col items-center gap-3 shrink-0">
        <div className="w-44 h-44 rounded-full bg-brand-surface flex items-center justify-center">
          <ImageIcon className="w-10 h-10 text-brand-light" />
        </div>
        <div className="font-bold text-brand-dark text-lg">{player.nickname}</div>
      </div>

      <div className="flex-1 flex flex-col gap-4">
        <div>
          <div className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1">
            MOST PICK
          </div>
          <div className="flex gap-2">
            {(player.mostPick ?? []).map((c, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-brand-surface border border-brand-border rounded text-sm text-brand-dark"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold text-brand-muted uppercase tracking-wider mb-1">
            소개 글
          </div>
          <p className="text-sm text-brand-dark leading-relaxed">{player.intro}</p>
        </div>
      </div>
    </div>
  );
}
