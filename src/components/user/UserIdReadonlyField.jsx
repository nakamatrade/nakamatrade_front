import { Input } from '@/components/ui/input';
import FormField from '@/components/common/FormField';

/**
 * 사용자 관리 - ID 필드 (읽기 전용)
 * ID는 변경 불가하며 비활성 스타일로 표시됩니다.
 *
 * @param {string} value - 표시할 ID 값
 */
export default function UserIdReadonlyField({ value }) {
  return (
    <FormField label="ID" id="userId">
      <Input
        type="text"
        id="userId"
        name="userId"
        value={value}
        disabled
        className="bg-muted text-muted-foreground cursor-not-allowed"
      />
    </FormField>
  );
}
