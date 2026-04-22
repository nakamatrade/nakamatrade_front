import { CheckCircle, XCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormField from '@/components/common/FormField';

/**
 * 회원가입 - ID 필드
 * 중복 확인 버튼과 사용 가능 여부 피드백을 포함합니다.
 *
 * 피드백 영역은 항상 렌더링되어 레이아웃 shift를 방지합니다.
 *
 * @param {string}   value             - 입력값
 * @param {Function} onChange          - 변경 핸들러
 * @param {'idle'|'available'|'unavailable'} checkStatus - 중복 확인 상태
 *   - 'idle'       : 확인 전 (기본값)
 *   - 'available'  : 사용 가능
 *   - 'unavailable': 이미 사용 중 (API 연동 후 활성화)
 * @param {Function} onCheckDuplicate  - 중복 확인 버튼 클릭 핸들러 (async 지원)
 */
export default function UserIdField({ value, onChange, checkStatus = 'idle', onCheckDuplicate }) {
  return (
    <FormField label="ID" id="userId">
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

      {/* 항상 렌더링하여 레이아웃 shift 방지 — idle 상태엔 공간만 차지 */}
      <div className="min-h-[1.25rem] flex items-center gap-1.5 text-sm">
        {checkStatus === 'available' && (
          <>
            <CheckCircle className="w-4 h-4 text-brand-primary shrink-0" />
            <span className="text-brand-primary">사용 가능한 ID입니다.</span>
          </>
        )}
        {checkStatus === 'unavailable' && (
          <>
            <XCircle className="w-4 h-4 text-destructive shrink-0" />
            <span className="text-destructive">사용 불가능한 ID입니다.</span>
          </>
        )}
      </div>
    </FormField>
  );
}
