export default function ProductVariants() {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="mb-4">
        <label className="block mb-1">Wariant</label>
        <select className="w-full border rounded px-3 py-2">
          <option>Wybierz</option>
        </select>
      </div>
      <div className="flex space-x-4 mb-4">
        <button className="px-4 py-2 border rounded">Czarny kolor</button>
        <button className="px-4 py-2 border rounded">Czerwony kolor</button>
        <button className="px-4 py-2 border rounded text-gray-400" disabled>Niedostępny wariant</button>
      </div>
      <div className="mb-6">
        <label className="block mb-1">Ilość</label>
        <input type="number" defaultValue="1" className="w-20 border rounded px-2 py-1"/>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mb-8">
        <button className="px-6 py-3 bg-black text-white rounded flex-1">Dodaj do koszyka</button>
        <button className="px-6 py-3 border rounded flex-1">Kup teraz</button>
      </div>
      <p className="text-xs text-gray-600">Darmowa wysyłka powyżej 250 zł</p>
    </section>
  );
}
