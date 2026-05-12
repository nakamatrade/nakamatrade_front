import { ImageIcon, ChevronDown } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-brand-dark">{label}</label>
      {children}
    </div>
  );
}

/**
 * 경매방 플레이어 수정 - 우측 플레이어 상세 편집 패널
 *
 * @param {object}   player    - 선택된 플레이어
 * @param {function} onChange  - 필드 변경 핸들러 (field, value) => void
 * @param {function} onSave    - 저장 버튼 핸들러
 */
export default function PlayerDetailPanel({ player, onChange, onSave }) {
  if (!player) {
    return (
      <aside className="border-l border-brand-border pl-8 ml-8 flex items-center justify-center text-brand-muted">
        편집할 플레이어를 선택하세요.
      </aside>
    );
  }

  return (
    <aside className="border-l border-brand-border pl-8 ml-8 flex flex-col gap-5 w-[420px] shrink-0">
      <div className="w-44 h-44 rounded-full bg-brand-surface flex items-center justify-center mx-auto">
        <ImageIcon className="w-10 h-10 text-brand-light" />
      </div>

      <Field label="플레이어 닉네임">
        <Input
          value={player.nickname}
          onChange={(e) => onChange('nickname', e.target.value)}
        />
      </Field>

      <Field label="플레이어 소개">
        <Input
          value={player.desc || ''}
          onChange={(e) => onChange('desc', e.target.value)}
          placeholder="소개글을 입력하세요"
        />
      </Field>

      <Field label="플레이어 라인">
        <div className="relative">
          <Input
            value={player.line || ''}
            onChange={(e) => onChange('line', e.target.value)}
            placeholder="라인 선택"
            className="pr-10"
          />
          <ChevronDown className="w-4 h-4 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </Field>

      <Field label="플레이어 가격">
        <Input
          type="number"
          value={player.price ?? ''}
          onChange={(e) => onChange('price', e.target.value)}
        />
      </Field>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-brand-dark">주요 챔피언</label>
        <div className="flex gap-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-20 h-20 rounded-md bg-brand-surface border border-brand-border flex items-center justify-center"
            >
              <ImageIcon className="w-5 h-5 text-brand-light" />
            </div>
          ))}
        </div>
      </div>

      <Button className="w-full mt-2" onClick={onSave}>저장</Button>
    </aside>
  );
}
