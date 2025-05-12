import PostCard from './PostCard';

export default function FeaturedPosts() {
  const posts = [
    { title: 'Jak wybrać idealny samochód importowany?', excerpt: 'Przewodnik krok po kroku...', author: 'Anna Kowalska', date: '10.05.2025' },
    { title: 'Jak przygotować auto do zakupu online?', excerpt: 'Porady dotyczące inspekcji...', author: 'Piotr Nowak', date: '02.05.2025' },
    { title: 'Trendy w imporcie samochodów w 2025', excerpt: 'Najpopularniejsze modele i rynki...', author: 'Marta Zielińska', date: '28.04.2025' },
  ];
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((p, i) => (
          <PostCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}
