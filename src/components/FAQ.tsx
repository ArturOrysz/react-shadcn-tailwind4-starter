export default function FAQ() {
  const faqs = [
    {
      question: 'Jak wygląda proces zakupu?',
      answer: 'Proces zakupu samochodu zaczyna się od wyboru pojazdu. Następnie przeprowadzamy wszystkie formalności związane z importem. Na koniec dostarczamy samochód do Klienta.'
    },
    {
      question: 'Czy mogę negocjować cenę?',
      answer: 'Tak, jesteśmy otwarci na negocjacje. Warto przedstawić swoje oczekiwania i budżet. Naszym celem jest zadowolenie klienta.'
    },
    {
      question: 'Jakie dokumenty są potrzebne?',
      answer: 'Będziesz potrzebował dowodu osobistego oraz dokumentów potwierdzających zakup. Dodatkowo wymagane będą dokumenty dotyczące homologacji. Nasz zespół pomoże w ich uzyskaniu.'
    },
    {
      question: 'Ile trwa proces zakupu?',
      answer: 'Czas zakupu zależy od kilku czynników, w tym dostępności pojazdu. Zazwyczaj proces trwa od kilku dni do kilku tygodni. Staramy się działać jak najszybciej.'
    },
    {
      question: 'Czy oferujecie gwarancję?',
      answer: 'Tak, oferujemy gwarancję na nasze pojazdy. Gwarancja obejmuje podstawowe usterki i problemy techniczne. Szczegóły można uzyskać podczas zakupu.'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl mb-4">Najczęściej zadawane pytania</h2>
      <p className="mb-6">Oto odpowiedzi na najczęściej zadawane pytania dotyczące procedury zakupu samochodu.</p>
      <div className="space-y-6">
        {faqs.map((f, i) => (
          <div key={i}>
            <h3 className="font-semibold">{f.question}</h3>
            <p className="mt-2">{f.answer}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <button className="px-5 py-2 border rounded">Kontakt</button>
      </div>
    </section>
);
}
