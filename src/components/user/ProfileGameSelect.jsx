import { ChevronDown } from 'lucide-react';

/**
 * 대표 프로필 관리 - 상단 게임 선택 드롭다운
 *
 * @param {string[]} games    - 선택 가능한 게임 목록
 * @param {string}   value    - 현재 선택된 게임
 * @param {function} onChange - 선택 변경 핸들러
 */
export default function ProfileGameSelect({ games, value, onChange }) {
  return (
    <div className="relative w-full max-w-3xl">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-12 appearance-none bg-white border border-brand-border rounded-md px-4 pr-10 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        {games.map((g) => (
          <option key={g} value={g}>{g}</option>
        ))}
      </select>
      <ChevronDown className="w-5 h-5 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}
