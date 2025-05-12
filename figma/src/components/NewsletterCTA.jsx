export default function NewsletterCTA() {
  return (
    <section className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl mb-4">Zapisz się do naszego newslettera</h2>
        <p className="mb-6">Bądź na bieżąco z najnowszymi wpisami i aktualnościami z naszego bloga!</p>
        <div className="flex justify-center">
          <input type="email" placeholder="Wpisz swój e-mail" className="px-4 py-2 rounded-l w-1/3"/>
          <button className="px-6 py-2 bg-black text-white rounded-r">Zapisz się</button>
        </div>
        <p className="text-xs mt-4">Klikając Zapisz się, potwierdzasz akceptację Regulaminu i Polityki Prywatności.</p>
      </div>
    </section>
  );
}
