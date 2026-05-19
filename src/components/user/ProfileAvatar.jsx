import { ImageIcon, Camera } from 'lucide-react';

/**
 * 대표 프로필 관리 - 원형 아바타 + 사진 등록 버튼
 *
 * @param {string|null} src     - 미리보기 이미지 URL
 * @param {function}    onPick  - 이미지 선택 버튼 클릭 핸들러
 */
export default function ProfileAvatar({ src, onPick }) {
  return (
    <div className="relative w-48 h-48 mx-auto">
      <div className="w-48 h-48 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center overflow-hidden">
        {src ? (
          <img src={src} alt="profile" className="w-full h-full object-cover" />
        ) : (
          <ImageIcon className="w-10 h-10 text-brand-light" />
        )}
      </div>
      <button
        type="button"
        onClick={onPick}
        aria-label="사진 등록"
        className="absolute bottom-1 right-1 w-11 h-11 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-md hover:bg-brand-primary-hover transition-colors"
      >
        <Camera className="w-5 h-5" />
      </button>
    </div>
  );
}
