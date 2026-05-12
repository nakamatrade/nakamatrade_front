import { ImageIcon } from 'lucide-react';

/**
 * 플레이어 입찰 - 좌측 패널 상단의 현재 경매중인 플레이어 카드
 *
 * @param {object} player - { nickname, line, tier, mainChampions: string[] }
 */
export default function BidCurrentPlayer({ player }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-sm font-semibold text-brand-dark">현재 경매 플레이어</h2>

      <div className="w-44 h-44 rounded-full bg-brand-surface flex items-center justify-center mx-auto">
        <ImageIcon className="w-10 h-10 text-brand-light" />
      </div>

      <div className="text-center">
        <div className="font-bold text-lg text-brand-dark">{player.nickname}</div>
        <div className="flex justify-center items-center gap-2 mt-1 text-sm text-brand-muted">
          <span>{player.line}</span>
          {player.tier && (
            <>
              <span>·</span>
              <span>{player.tier}</span>
            </>
          )}
        </div>
      </div>

      <div>
        <div className="text-sm font-semibold text-brand-dark mb-2">주요 챔피언</div>
        <div className="flex gap-2">
          {(player.mainChampions ?? []).map((c, i) => (
            <div
              key={i}
              className="w-14 h-14 rounded-md bg-brand-surface border border-brand-border flex items-center justify-center"
              title={c}
            >
              <ImageIcon className="w-4 h-4 text-brand-light" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
