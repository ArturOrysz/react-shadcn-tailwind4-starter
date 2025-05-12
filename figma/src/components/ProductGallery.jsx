export default function ProductGallery() {
  return (
    <section className="container mx-auto px-4 py-16 md:flex md:space-x-8">
      <div className="md:w-1/4 space-y-4">
        {[1,2,3,4].map(i => (
          <div key={i} className="w-full h-20 bg-gray-200"></div>
        ))}
      </div>
      <div className="md:w-3/4 h-[400px] bg-gray-200"></div>
    </section>
  );
}
