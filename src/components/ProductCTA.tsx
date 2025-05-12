export default function ProductCTA() {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl mb-4">Zainwestuj w swój nowy pojazd</h2>
        <p className="mb-6">Skontaktuj się z naszym doradcą, aby uzyskać więcej informacji o dostępnych pojazdach.</p>
        <div className="flex justify-center space-x-4">
          <button className="px-6 py-3 bg-white text-black rounded">Kup</button>
          <button className="px-6 py-3 border border-white rounded">Kontakt</button>
        </div>
      </div>
    </section>
  );
}
