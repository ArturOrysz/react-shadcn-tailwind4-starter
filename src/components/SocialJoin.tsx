export default function SocialJoin() {
  return (
    <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center md:space-x-8">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-2xl mb-4">Dołącz do naszej społeczności!</h2>
        <p className="mb-6">Subskrybuj nasz newsletter, aby być na bieżąco z nowościami i promocjami w Detroit Cars.</p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-black text-white rounded">Subskrybuj</button>
          <button className="px-6 py-3 border rounded">Udostępnij</button>
        </div>
      </div>
      <div className="md:w-1/2 h-[250px] bg-gray-200"></div>
    </section>
  );
}
