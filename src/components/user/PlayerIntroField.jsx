import { Input } from '@/components/ui/input';
import FormField from '@/components/common/FormField';

/**
 * 대표 프로필 관리 - 플레이어 소개 입력 필드
 *
 * @param {string}   value    - 입력값
 * @param {Function} onChange - 변경 핸들러
 */
export default function PlayerIntroField({ value, onChange }) {
  return (
    <FormField label="플레이어 소개" id="intro">
      <Input
        type="text"
        id="intro"
        name="intro"
        placeholder="간단한 소개를 입력하세요"
        value={value}
        onChange={onChange}
      />
    </FormField>
  );
}
