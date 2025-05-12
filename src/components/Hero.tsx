export default function Hero() {
  return (
    <section className="relative">
      <div className="h-[400px] bg-gray-200 w-full"></div>
      <div className="container mx-auto px-4 -mt-32 flex flex-col md:flex-row items-center">
        <div className="bg-white p-8 md:w-1/2 shadow-lg">
          <h1 className="text-3xl md:text-4xl mb-4">Importuj samochody z USA z Detroit Cars</h1>
          <p className="mb-6">Oferujemy kompleksowe usługi importu samochodów z USA...</p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-black text-white rounded">Dowiedz się</button>
            <button className="px-6 py-3 border rounded">Skontaktuj się</button>
          </div>
        </div>
      </div>
    </section>
  );
}
