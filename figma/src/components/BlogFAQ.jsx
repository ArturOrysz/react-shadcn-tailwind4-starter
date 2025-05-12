export default function BlogFAQ() {
  const faqs = [
    { q: 'Czy muszę rejestrować konto, aby komentować?', a: 'Tak, rejestracja jest wymagana, aby publikować komentarze.' },
    { q: 'Jak dodać komentarz do wpisu?', a: 'Zaloguj się i przewiń na dół wpisu, aby dodać komentarz.' },
    { q: 'Czy mogę subskrybować nowe wpisy?', a: 'Tak, zapisz się na newsletter, aby otrzymywać powiadomienia.' },
  ];
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl mb-6">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <details key={i} className="border-t py-4">
            <summary className="cursor-pointer font-medium">{f.q}</summary>
            <p className="mt-2">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
