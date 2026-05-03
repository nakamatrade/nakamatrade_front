import { cn } from '@/lib/utils';

/**
 * @param {{ games: string[], activeGame: string, onSelect: (game: string) => void }} props
 */
export default function GameTabs({ games, activeGame, onSelect }) {
  return (
    <div className="flex border-b border-brand-border mb-6">
      {games.map((g) => (
        <button
          key={g}
          onClick={() => onSelect(g)}
          className={cn(
            'px-8 py-3 text-sm transition-colors border-b-2 -mb-px',
            activeGame === g
              ? 'text-brand-primary border-brand-primary font-semibold'
              : 'text-brand-muted border-transparent hover:text-brand-dark'
          )}
        >
          {g}
        </button>
      ))}
    </div>
  );
}
