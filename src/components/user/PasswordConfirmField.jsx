import { Input } from '@/components/ui/input';
import FormField from '@/components/common/FormField';

/**
 * 회원가입 - 비밀번호 확인 필드
 * 비밀번호 일치 여부 피드백을 포함합니다.
 *
 * @param {string}   value          - 입력값
 * @param {Function} onChange       - 변경 핸들러
 * @param {boolean}  passwordMatch  - 비밀번호 일치 여부
 */
export default function PasswordConfirmField({ value, onChange, passwordMatch }) {
  return (
    <FormField
      label="비밀번호 확인"
      id="passwordConfirm"
      successMessage={passwordMatch ? 'Password 일치' : null}
    >
      <Input
        type="password"
        id="passwordConfirm"
        name="passwordConfirm"
        placeholder="비밀번호 재입력"
        value={value}
        onChange={onChange}
      />
    </FormField>
  );
}
