import RandomOrderSlot from './RandomOrderSlot';

/**
 * 경매플레이어 랜덤 순서 지정 - 순서 표시 그리드
 *
 * @param {object[]} players - 순서대로 정렬된 플레이어 배열
 * @param {number}   columns - 한 행의 슬롯 개수 (기본 5)
 */
export default function RandomOrderGrid({ players, columns = 5 }) {
  return (
    <div
      className="grid gap-y-3"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {players.map((player, i) => (
        <RandomOrderSlot
          key={i}
          player={player}
          order={i + 1}
          showPlay={(i + 1) % columns !== 0 && i < players.length - 1}
        />
      ))}
    </div>
  );
}
