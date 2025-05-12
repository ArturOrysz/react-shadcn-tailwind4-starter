const products = [
  { name: 'Ford Mustang GT', price: '$55' },
  { name: 'Chevrolet Camaro SS', price: '$55' },
  { name: 'Dodge Charger R/T', price: '$55' },
  { name: 'Tesla Model S', price: '$55' },
  { name: 'Jeep Wrangler Rubicon', price: '$55' },
  { name: 'Chrysler 300 C', price: '$55' },
  { name: 'Ford Explorer XLT', price: '$55' },
  { name: 'Nissan Altima SL', price: '$55' },
];

export default function ProductGrid() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl mb-4">Samochody</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p, i) => (
          <div key={i} className="bg-white shadow p-4 flex flex-col">
            <div className="h-40 bg-gray-200 mb-4"></div>
            <h3 className="font-medium mb-2">{p.name}</h3>
            <p className="mb-4">{p.price}</p>
            <button className="mt-auto px-4 py-2 border rounded">Dodaj do koszyka</button>
          </div>
        ))}
      </div>
      <div className="mt-8 text-right">
        <button className="px-6 py-3 border rounded">Zobacz wszystkie</button>
      </div>
    </section>
);
}
