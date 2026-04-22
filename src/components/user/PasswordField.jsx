import { Input } from '@/components/ui/input';
import FormField from '@/components/common/FormField';

/**
 * 회원가입 - 비밀번호 필드
 *
 * @param {string}   value     - 입력값
 * @param {Function} onChange  - 변경 핸들러
 */
export default function PasswordField({ value, onChange }) {
  return (
    <FormField label="비밀번호" id="password">
      <Input
        type="password"
        id="password"
        name="password"
        placeholder="비밀번호 입력"
        value={value}
        onChange={onChange}
      />
    </FormField>
  );
}
