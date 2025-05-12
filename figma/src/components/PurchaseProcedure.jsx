export default function PurchaseProcedure() {
  const steps = [
    {
      title: 'Wybór, licytacja, import i homologacja – wszystko w jednym miejscu',
      description: 'Nasza procedura zakupu samochodu jest prosta i przejrzysta, abyś mógł cieszyć się nowym pojazdem bez stresu.',
      linkText: 'Dowiedź się'
    },
    {
      title: 'Wybór idealnego samochodu na aukcji',
      description: 'Przeglądaj nasze oferty i znajdź samochód, który spełni Twoje oczekiwania.',
      linkText: 'Zobacz'
    },
    {
      title: 'Bezpieczny import i profesjonalna homologacja',
      description: 'Zajmiemy się wszystkimi formalnościami, aby Twój nowy samochód był gotowy do jazdy.',
      linkText: 'Skontaktuj się'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="text-3xl mb-4">Jak kupić auto</h1>
      <p className="mb-6">Na tej stronie dowiesz się, jak przebiega proces zakupu samochodu z USA. Przedstawiamy krok po kroku, co musisz wiedzieć, aby dokonać udanego zakupu.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step, idx) => (
          <div key={idx} className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-medium">{step.title}</h3>
              <p className="mb-2">{step.description}</p>
              <a href="#" className="text-sm hover:underline">{step.linkText} →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
);
}
