import { CheckCircle } from 'lucide-react';
import { Label } from '@/components/ui/label';

/**
 * 폼 필드 공통 래퍼 (Label + 입력 영역 + 성공 메시지)
 *
 * @param {string}    label          - 필드 라벨 텍스트
 * @param {string}    id             - Label의 htmlFor에 연결될 id
 * @param {string}    [successMessage] - 조건이 충족될 때 표시할 성공 메시지 (falsy면 숨김)
 * @param {ReactNode} children       - Input 또는 커스텀 입력 요소
 */
export default function FormField({ label, id, successMessage, children }) {
  return (
    <div className="form-field">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {successMessage && (
        <div className="field-feedback-success">
          <CheckCircle className="w-4 h-4" />
          <span>{successMessage}</span>
        </div>
      )}
    </div>
  );
}