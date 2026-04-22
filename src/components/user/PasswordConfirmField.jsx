import { CheckCircle, XCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import FormField from '@/components/common/FormField';

/**
 * 회원가입 / 사용자 관리 - 비밀번호 확인 필드
 * 비밀번호 일치 여부 피드백을 포함합니다.
 *
 * 피드백은 absolute 포지션으로 렌더링되어 레이아웃에 영향을 주지 않습니다.
 * 상위 폼의 gap이 피드백 텍스트 공간을 자연스럽게 확보합니다.
 *
 * @param {string}   value        - 입력값
 * @param {Function} onChange     - 변경 핸들러
 * @param {'idle'|'match'|'mismatch'} matchStatus - 비밀번호 일치 상태
 *   - 'idle'    : 미입력 (기본값)
 *   - 'match'   : 비밀번호 동일
 *   - 'mismatch': 비밀번호 불일치
 */
export default function PasswordConfirmField({ value, onChange, matchStatus = 'idle' }) {
  return (
    <div className="relative">
      <FormField label="비밀번호 확인" id="passwordConfirm">
        <Input
          type="password"
          id="passwordConfirm"
          name="passwordConfirm"
          placeholder="비밀번호 재입력"
          value={value}
          onChange={onChange}
        />
      </FormField>

      {/* absolute 포지션 — 레이아웃 shift 없이 gap 공간 안에 표시 */}
      <div className="absolute left-0 top-full mt-1.5 flex items-center gap-1.5 text-sm">
        {matchStatus === 'match' && (
          <>
            <CheckCircle className="w-4 h-4 text-brand-primary shrink-0" />
            <span className="text-brand-primary">비밀번호가 동일합니다.</span>
          </>
        )}
        {matchStatus === 'mismatch' && (
          <>
            <XCircle className="w-4 h-4 text-destructive shrink-0" />
            <span className="text-destructive">비밀번호가 동일하지 않습니다.</span>
          </>
        )}
      </div>
    </div>
  );
}
