export default function Benefits() {
  return (
    <section className="container mx-auto px-4 py-16 md:flex md:space-x-12 items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-2xl mb-4">Zalety korzystania z Detroit Cars</h2>
        <p className="mb-6">Wybierając Detroit Cars, oszczędzasz czas i zyskujesz dostęp do szerokiej gamy pojazdów. Nasze profesjonalne wsparcie towarzyszy Ci na każdym etapie zakupu.</p>
        <div className="flex space-x-4">
          <button className="px-5 py-2 bg-black text-white rounded">Dowiedz się</button>
          <button className="px-5 py-2 border rounded">Skontaktuj się</button>
        </div>
      </div>
      <div className="md:w-1/2 h-[300px] bg-gray-200"></div>
    </section>
);
}
