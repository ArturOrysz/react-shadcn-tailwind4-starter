export default function PostContent() {
  return (
    <section className="container mx-auto px-4 py-8 space-y-8">
      <article className="prose max-w-none">
        <h2>Heading 2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
        <h3>Heading 3</h3>
        <p>Etiam euismod...</p>
        <h4>Heading 4</h4>
        <p>Morbi sed imperdiet...</p>
        <div className="w-full h-[250px] bg-gray-200"></div>
        <p className="text-xs text-gray-600">Image caption goes here</p>
        <h5>Heading 5</h5>
        <blockquote className="border-l-4 pl-4 italic">"Lorem ipsum sit amet..."</blockquote>
        <h6>Heading 6</h6>
        <p>Nulla facilisi...</p>
      </article>
    </section>
  );
}
