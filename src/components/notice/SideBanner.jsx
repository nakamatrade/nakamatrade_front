import { ImageIcon } from 'lucide-react';

export default function SideBanner() {
  return (
    <div className="aspect-[300/595] w-full border border-brand-border rounded-md bg-white/60 flex items-center justify-center text-brand-border">
      <ImageIcon className="w-12 h-12" />
    </div>
  );
}
