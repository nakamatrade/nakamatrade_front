import { Input } from '@/components/ui/input';
import FormField from '@/components/common/FormField';

/**
 * 대표 프로필 관리 - 플레이어 닉네임 입력 필드
 *
 * @param {string}   value    - 입력값
 * @param {Function} onChange - 변경 핸들러
 */
export default function PlayerNicknameField({ value, onChange }) {
  return (
    <FormField label="플레이어 닉네임" id="playerNickname">
      <Input
        type="text"
        id="playerNickname"
        name="playerNickname"
        placeholder="게임 내 닉네임을 입력하세요"
        value={value}
        onChange={onChange}
      />
    </FormField>
  );
}
