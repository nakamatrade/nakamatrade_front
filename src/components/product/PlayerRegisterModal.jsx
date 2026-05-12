import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

/**
 * 플레이어 등록 팝업 모달
 *
 * @param {function} onClose    - 닫기 핸들러
 * @param {function} onSubmit   - 등록 핸들러 ({ nickname, desc, teams })
 */
export default function PlayerRegisterModal({ onClose, onSubmit }) {
  const [nickname, setNickname] = useState('');
  const [desc, setDesc] = useState('');
  const [teamInput, setTeamInput] = useState('');
  const [teams, setTeams] = useState([]);

  const addTeam = () => {
    const tag = teamInput.trim();
    if (tag && !teams.includes(tag)) {
      setTeams((prev) => [...prev, tag]);
    }
    setTeamInput('');
  };

  const removeTeam = (tag) => setTeams((prev) => prev.filter((t) => t !== tag));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nickname.trim()) return;
    onSubmit({ nickname: nickname.trim(), desc: desc.trim(), teams });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-brand-muted hover:text-brand-dark transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold text-brand-dark mb-6">플레이어 등록</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="nickname">닉네임 *</Label>
            <Input
              id="nickname"
              placeholder="플레이어 닉네임"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label htmlFor="desc">소개글</Label>
            <Input
              id="desc"
              placeholder="플레이어 소개글"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <Label>챔피언 / 픽</Label>
            <div className="flex gap-2">
              <Input
                placeholder="챔피언 입력 후 추가"
                value={teamInput}
                onChange={(e) => setTeamInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') { e.preventDefault(); addTeam(); }
                }}
              />
              <Button type="button" variant="outline" onClick={addTeam}>
                추가
              </Button>
            </div>
            {teams.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-1">
                {teams.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 px-2 py-0.5 bg-brand-surface text-sm rounded-full border border-brand-border"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTeam(tag)}
                      className="text-brand-muted hover:text-brand-dark"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={onClose}>
              취소
            </Button>
            <Button type="submit">등록</Button>
          </div>
        </form>
      </div>
    </div>
  );
}