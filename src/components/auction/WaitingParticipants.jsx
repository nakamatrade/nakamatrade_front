import { ImageIcon, Users } from 'lucide-react';

function ParticipantSlot({ participant }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-20 h-20 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center">
        <ImageIcon className="w-6 h-6 text-brand-light" />
      </div>
      <span className="text-sm font-medium text-brand-dark">
        {participant?.name ?? '대기중...'}
      </span>
    </div>
  );
}

/**
 * 경매방 플레이어 참여 대기 - 참가자 슬롯 + 대기 안내 메시지
 *
 * @param {object[]} participants - 참가자 배열 ({ id, name } 또는 null)
 * @param {number}   maxSlots     - 슬롯 총 개수
 */
export default function WaitingParticipants({ participants = [], maxSlots = 10 }) {
  const slots = Array.from({ length: maxSlots }, (_, i) => participants[i] ?? null);
  const joined = participants.filter(Boolean).length;

  return (
    <div className="flex flex-col items-center gap-10 w-full">
      <div className="flex items-center gap-3 text-brand-primary">
        <Users className="w-7 h-7" />
        <span className="text-lg font-semibold">
          참가자 {joined} / {maxSlots}명
        </span>
        <span className="inline-block w-2 h-2 rounded-full bg-brand-primary animate-pulse ml-2" />
      </div>

      <p className="text-brand-muted text-center">
        다른 참가자가 입장할 때까지 잠시만 기다려주세요.
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-8 gap-y-6">
        {slots.map((p, i) => (
          <ParticipantSlot key={i} participant={p} />
        ))}
      </div>
    </div>
  );
}
