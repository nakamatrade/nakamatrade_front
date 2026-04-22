import { CheckCircle, XCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormField from '@/components/common/FormField';

/**
 * 회원가입 - ID 필드
 * 중복 확인 버튼과 사용 가능 여부 피드백을 포함합니다.
 *
 * 피드백은 absolute 포지션으로 렌더링되어 레이아웃에 영향을 주지 않습니다.
 * 상위 폼의 gap이 피드백 텍스트 공간을 자연스럽게 확보합니다.
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
    <div className="relative">
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
      </FormField>

      {/* absolute 포지션 — 레이아웃 shift 없이 gap 공간 안에 표시 */}
      <div className="absolute left-0 top-full mt-1.5 flex items-center gap-1.5 text-sm">
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
    </div>
  );
}
