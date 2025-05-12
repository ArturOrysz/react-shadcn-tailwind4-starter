export default function ProductDetails() {
  const sections = [
    { title: 'Szczegóły', content: 'Ford Mustang oferuje wyjątkowe osiągi i komfort jazdy. Wyposażony w nowoczesne technologie, zapewnia bezpieczeństwo i wygodę.' },
    { title: 'Wysyłka', content: 'Wysyłka odbywa się w ciągu 5-7 dni roboczych. Gwarantujemy staranne pakowanie oraz ubezpieczenie przesyłki. Śledzenie zamówienia dostępne jest online.' },
    { title: 'Zwroty', content: 'Możliwość zwrotu w ciągu 14 dni. Produkt musi być w oryginalnym stanie. Skontaktuj się z nami, aby uzyskać więcej informacji.' }
  ];
  return (
    <section className="container mx-auto px-4 py-8">
      {sections.map((s, i) => (
        <details key={i} className="border-t py-4">
          <summary className="cursor-pointer font-medium">{s.title}</summary>
          <p className="mt-2">{s.content}</p>
        </details>
      ))}
    </section>
  );
}
