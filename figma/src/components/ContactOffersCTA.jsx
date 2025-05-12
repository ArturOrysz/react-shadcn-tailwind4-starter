export default function ContactOffersCTA() {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center md:space-x-8">
      <div className="md:w-1/2">
        <h2 className="text-2xl mb-4">Skontaktuj się z nami</h2>
        <p className="mb-6">Uzyskaj więcej informacji lub umów się na oględziny wybranego pojazdu już dziś</p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 border rounded">Kontakt</button>
          <button className="px-6 py-3 bg-black text-white rounded">Umów się</button>
        </div>
      </div>
      <div className="md:w-1/2 h-[250px] bg-gray-200 mt-6 md:mt-0"></div>
    </section>
);
}
