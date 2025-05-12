import PostCard from './PostCard';

export default function LatestPosts() {
  const posts = [
    { title: 'Jak działają procedury importu samochodu z USA?', excerpt: 'Wszystko co musisz wiedzieć...', author: 'Kamil Wiśniewski', date: '15.05.2025' },
    { title: 'Jak przeliczyć cło i podatki?', excerpt: 'Oblicz koszty importu...', author: 'Ewa Kowalczyk', date: '12.05.2025' },
    { title: 'Bezpieczne aukcje samochodowe online', excerpt: 'Jak nie dać się oszukać...', author: 'Tomasz Zielonka', date: '08.05.2025' },
  ];
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-2xl mb-6 text-center">Najnowsze artykuły blogowe</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((p, i) => (
          <PostCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
