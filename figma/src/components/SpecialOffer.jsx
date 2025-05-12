export default function SpecialOffer() {
  return (
    <section className="container mx-auto px-4 py-16 md:flex md:space-x-8">
      <div className="md:w-1/2">
        <h2 className="text-2xl mb-4">Oferujemy wyjątkowe samochody z USA, które spełnią Twoje oczekiwania.</h2>
        <p className="mb-6">Nasza oferta obejmuje starannie wyselekcjonowane pojazdy, które przejdą wszystkie normy homologacyjne.</p>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div>
              <h3 className="font-medium">Specyfikacja</h3>
              <p className="text-sm">Silnik 2.0L, Moc 150 KM, Przebieg 30 000 km, Kolor: Czerwony</p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div>
              <h3 className="font-medium">Cena</h3>
              <p className="text-sm">Cena: 65 000 PLN, obejmuje wszystkie opłaty związane z importem.</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="md:w-1/2 h-[250px] bg-gray-200"></div>
    </section>
);
}
