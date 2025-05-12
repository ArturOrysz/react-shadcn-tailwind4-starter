export default function PostTestimonial() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-4">
          {Array(5).fill(0).map((_,i) => (
            <span key={i} className="block w-4 h-4 bg-black mr-1"></span>
          ))}
        </div>
        <p className="italic mb-4">"Zakup samochodu z Detroit Cars to czysta przyjemność!"</p>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <span className="font-semibold">Jan Kowalski, AutoExpert</span>
        </div>
      </div>
    </section>
  );
}
