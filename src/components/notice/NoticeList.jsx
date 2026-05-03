/**
 * @param {{ items: { id: number, title: string }[], selectedId: number | null, onSelect: (id: number) => void }} props
 */
export default function NoticeList({ items, selectedId, onSelect }) {
  if (items.length === 0) {
    return <p className="text-sm text-brand-muted py-6 text-center">검색 결과가 없습니다.</p>;
  }

  return (
    <ul className="border border-brand-border rounded-xl overflow-hidden bg-white divide-y divide-brand-border">
      {items.map((item) => (
        <li
          key={item.id}
          onClick={() => onSelect(item.id)}
          className={`flex items-center px-4 py-3 cursor-pointer transition-colors ${
            selectedId === item.id
              ? 'bg-brand-surface text-brand-primary font-semibold'
              : 'hover:bg-brand-surface/50 text-brand-dark'
          }`}
        >
          <span className="text-sm">{item.title}</span>
        </li>
      ))}
    </ul>
  );
}