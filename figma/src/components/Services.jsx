const services = [
  { title: 'Import samochodów z USA do Polski' },
  { title: 'Sprzedaż pojazdów z aukcji' },
  { title: 'Usługi homologacji dla sprowadzanych pojazdów' },
  { title: 'Naprawy i serwis na życzenie klienta' },
];

export default function Services() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="md:flex md:space-x-12 mb-12">
        <div className="md:w-1/3">
          <h2 className="text-2xl mb-4">Nasze główne usługi w Detroit Cars</h2>
          <p className="mb-6">Oferujemy kompleksowy import samochodów z USA...</p>
          <button className="px-5 py-2 bg-black text-white rounded">Dowiedz się</button>
          <button className="px-5 py-2 border rounded ml-4">Zamów →</button>
        </div>
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 md:mt-0">
          {services.map(s=>(
            <div key={s.title} className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
              <h3 className="text-lg font-medium">{s.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
