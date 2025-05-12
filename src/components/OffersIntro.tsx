export default function OffersIntro() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl mb-2">Nasze dostępne oferty</h1>
      <p className="mb-8">Oferujemy szeroki wybór samochodów importowanych z USA, dostosowanych do Twoich potrzeb.</p>
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h2 className="text-2xl mb-4">Sprawdź nasze wyjątkowe oferty samochodów</h2>
          <p className="mb-4">Oferujemy szeroki wybór samochodów z USA, które spełnią Twoje oczekiwania. Każdy pojazd jest starannie przygotowany i gotowy do sprzedaży.</p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>Wysoka jakość i konkurencyjne ceny</li>
            <li>Sprawdź specyfikacje wybranych modeli</li>
            <li>Skontaktuj się z nami, aby dowiedzieć się więcej</li>
          </ul>
          <div className="flex space-x-4">
            <button className="px-6 py-3 border rounded">Zobacz →</button>
            <button className="px-6 py-3 bg-black text-white rounded">Więcej →</button>
          </div>
        </div>
        <div className="md:w-1/2 h-[250px] bg-gray-200"></div>
      </div>
    </section>
);
}
