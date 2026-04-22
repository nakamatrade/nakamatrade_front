import { Input } from '@/components/ui/input';
import FormField from '@/components/common/FormField';

/**
 * 사용자 관리 - 이메일 필드
 *
 * @param {string}   value     - 입력값
 * @param {Function} onChange  - 변경 핸들러
 */
export default function EmailField({ value, onChange }) {
  return (
    <FormField label="이메일" id="email">
      <Input
        type="email"
        id="email"
        name="email"
        placeholder="이메일 입력"
        value={value}
        onChange={onChange}
      />
    </FormField>
  );
}
