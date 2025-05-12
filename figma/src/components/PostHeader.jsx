export default function PostHeader() {
  return (
    <section className="container mx-auto px-4 py-8">
      <nav className="text-sm mb-4">
        <a href="/" className="hover:underline">Blog</a> {'>'} <a href="#" className="hover:underline">Porady</a> {'>'} <span className="font-semibold">Jak importować samochód z USA?</span>
      </nav>
      <h1 className="text-3xl mb-2">Jak importować samochód z USA?</h1>
      <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <span>Jan Kowalski</span>
        </div>
        <span>11 sty 2025</span>
        <span>5 min czytania</span>
        <div className="flex space-x-3">
          {/* ikonki link, share, print */}
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
          <div className="w-5 h-5 bg-gray-200 rounded"></div>
        </div>
      </div>
    </section>
  );
}
