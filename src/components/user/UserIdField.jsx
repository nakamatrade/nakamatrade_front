import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormField from '@/components/common/FormField';

/**
 * 회원가입 - ID 필드
 * 중복 확인 버튼과 사용 가능 여부 피드백을 포함합니다.
 *
 * @param {string}   value             - 입력값
 * @param {Function} onChange          - 변경 핸들러
 * @param {boolean}  idChecked         - 중복 확인 완료 여부
 * @param {Function} onCheckDuplicate  - 중복 확인 버튼 클릭 핸들러
 */
export default function UserIdField({ value, onChange, idChecked, onCheckDuplicate }) {
  return (
    <FormField
      label="ID"
      id="userId"
      successMessage={idChecked ? '사용 가능한 ID입니다' : null}
    >
      <div className="flex gap-2">
        <Input
          type="text"
          id="userId"
          name="userId"
          placeholder="아이디 입력"
          value={value}
          onChange={onChange}
        />
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="shrink-0 h-11"
          onClick={onCheckDuplicate}
        >
          중복 확인
        </Button>
      </div>
    </FormField>
  );
}
