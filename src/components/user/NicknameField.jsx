import { Input } from '@/components/ui/input';
import FormField from '@/components/common/FormField';

/**
 * 회원가입 - 닉네임 필드
 *
 * @param {string}   value     - 입력값
 * @param {Function} onChange  - 변경 핸들러
 */
export default function NicknameField({ value, onChange }) {
  return (
    <FormField label="닉네임" id="nickname">
      <Input
        type="text"
        id="nickname"
        name="nickname"
        placeholder="닉네임 입력"
        value={value}
        onChange={onChange}
      />
    </FormField>
  );
}
