/**
 * @param {{ notice: { id: number, title: string } | undefined }} props
 */
export default function NoticeDetail({ notice }) {
  if (!notice) return null;

  return (
    <div className="mt-4 p-5 border border-brand-border rounded-xl bg-white">
      <h2 className="font-bold text-brand-dark mb-2">{notice.title}</h2>
      <p className="text-sm text-brand-muted">공지사항 상세 내용이 여기에 표시됩니다.</p>
    </div>
  );
}
