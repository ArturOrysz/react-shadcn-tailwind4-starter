export default function ProductHeader() {
  return (
    <header className="container mx-auto px-4 py-8">
      <h1 className="text-3xl mb-2">Ford Mustang</h1>
      <p className="text-2xl mb-4">250000 zł</p>
      <div className="flex items-center mb-6">
        <div className="flex mr-2">
          {Array(5).fill(0).map((_,i) => (
            <span key={i} className="block w-4 h-4 bg-black mr-1"></span>
          ))}
        </div>
        <span className="text-sm">(4.5 stars • 15 reviews)</span>
      </div>
      <p className="mb-6">Ford Mustang to ikona amerykańskiego stylu. Z mocnym silnikiem i sportowym designem, to auto przyciąga spojrzenia.</p>
    </header>
  );
}
