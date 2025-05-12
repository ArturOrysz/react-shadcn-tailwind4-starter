export default function About() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="md:flex md:space-x-12 items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl mb-4">Nasza historia i wartości Detroit Cars</h2>
          <p className="mb-6">Detroit Cars to firma z pasją do samochodów...</p>
          <div className="flex space-x-4">
            <button className="px-5 py-2 bg-black text-white rounded">Dowiedz się</button>
            <button className="px-5 py-2 border rounded">Kontakt →</button>
          </div>
        </div>
        <div className="md:w-1/2 h-[300px] bg-gray-200"></div>
      </div>
    </section>
  );
}
