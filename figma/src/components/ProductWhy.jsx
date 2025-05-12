export default function ProductWhy() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl mb-4">Dlaczego warto wybrać ten pojazd?</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Atrakcyjna cena zakupu i niskie koszty eksploatacji.</li>
        <li>Bezpieczny i sprawdzony pojazd z USA.</li>
        <li>Certyfikacja zapewniająca zgodność z normami w Polsce.</li>
      </ul>
      <div className="flex space-x-4">
        <button className="px-6 py-3 border rounded">Sprawdź</button>
        <button className="px-6 py-3 bg-black text-white rounded">Dowiedz się →</button>
      </div>
    </section>
  );
}
