export default function PostTOC() {
  const headings = ['Heading 2', 'Heading 3', 'Heading 4', 'Heading 5', 'Heading 6'];
  return (
    <section className="container mx-auto px-4 py-4 border-t border-b">
      <details className="mb-4">
        <summary className="cursor-pointer font-medium">Spis treści</summary>
        <ul className="mt-2 list-disc list-inside space-y-2">
          {headings.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      </details>
    </section>
  );
}
