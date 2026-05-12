import AuctionRoomCard from './AuctionRoomCard';

/**
 * 경매방 카드 그리드
 *
 * @param {object[]}        rooms    - 방 데이터 배열
 * @param {Set<number>}     selected - 선택된 방 id 집합
 * @param {function}        onToggle - 카드 체크박스 토글
 * @param {function}        onEnter  - 카드 클릭(입장)
 */
export default function AuctionRoomGrid({ rooms, selected, onToggle, onEnter }) {
  if (rooms.length === 0) {
    return (
      <p className="text-sm text-brand-muted text-center py-10">
        검색 결과가 없습니다.
      </p>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {rooms.map((room) => (
        <AuctionRoomCard
          key={room.id}
          room={room}
          selected={selected.has(room.id)}
          onToggle={() => onToggle(room.id)}
          onEnter={() => onEnter(room.id)}
        />
      ))}
    </div>
  );
}
