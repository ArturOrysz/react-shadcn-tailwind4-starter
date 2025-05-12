export default function ProductTestimonial() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          {Array(5).fill(0).map((_,i) => (
            <span key={i} className="block w-4 h-4 bg-black mr-1"></span>
          ))}
        </div>
        <p className="italic mb-4">"Jestem bardzo zadowolony z zakupu! Samochód spełnia wszystkie moje oczekiwania."</p>
        <p className="font-semibold">Jan Kowalski, Menadżer AutoMax</p>
      </div>
    </section>
  );
}
