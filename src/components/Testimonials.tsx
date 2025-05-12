const reviews = [
  { text: 'Profesjonalna obsługa...', author: 'Jan Kowalski, Dyrektor AutoMax' },
  { text: 'Zamówienie przebiegło...', author: 'Anna Nowak, Menadżer CarExpert' },
  { text: 'Wszystko odbyło się...', author: 'Marek Wiśniewski, Właściciel AutoLand' },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl mb-4">Opinie Klientów</h2>
        <p className="mb-8">Zdecydowanie polecam usługi tej firmy!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i)=>(
            <div key={i} className="p-6 bg-white shadow">
              <div className="flex mb-4">
                {Array(5).fill(0).map((_,i)=>(
                  <span key={i} className="block w-4 h-4 bg-black mr-1"></span>
                ))}
              </div>
              <p className="mb-4">"{r.text}"</p>
              <p className="font-semibold">{r.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
