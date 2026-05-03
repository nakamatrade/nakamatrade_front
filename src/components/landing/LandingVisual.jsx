import { ImageIcon } from 'lucide-react';

export default function LandingVisual() {
  return (
    <div className="flex-1 max-w-lg">
      <div className="aspect-square max-w-md mx-auto border-2 border-dashed border-brand-border rounded-2xl flex items-center justify-center bg-white/60">
        <ImageIcon className="w-20 h-20 text-brand-border" />
      </div>
    </div>
  );
}
