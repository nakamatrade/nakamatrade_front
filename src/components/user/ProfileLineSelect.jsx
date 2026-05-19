import { ChevronDown } from 'lucide-react';

/**
 * 대표 프로필 관리 - 라인(포지션) 드롭다운
 *
 * @param {string}   label        - 필드 라벨 (예: "주 포지션", "부 포지션")
 * @param {string[]} options      - 선택 가능한 라인 목록
 * @param {string}   value        - 현재 선택값
 * @param {function} onChange     - 선택 변경 핸들러
 * @param {string}   placeholder  - 미선택 시 표시 텍스트
 */
export default function ProfileLineSelect({
  label,
  options = [],
  value,
  onChange,
  placeholder = '라인을 선택하세요',
}) {
  return (
    <div className="form-field">
      <label className="text-sm font-medium text-brand-dark">{label}</label>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full h-11 appearance-none bg-white border border-brand-border rounded-md px-3 pr-10 text-sm text-brand-dark focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-brand-muted absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
}
