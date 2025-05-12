export default function BlogHero() {
  return (
    <section className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl mb-2">Witamy na naszym blogu</h1>
      <p className="mb-6">Czytaj inspirujące wpisy, porady, i nowości</p>
      <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Szukaj wpisów..."
          className="w-full border rounded-l px-4 py-2"
        />
        <button className="px-4 py-2 bg-black text-white rounded-r">Szukaj</button>
      </div>
    </section>
  );
}
