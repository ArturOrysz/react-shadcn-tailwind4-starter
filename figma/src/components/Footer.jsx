export default function Footer() {
  const links = [
    ['Link Pierwszy','Link Drugi','Link Trzeci','Link Czwarty'],
    ['Link Piąty','Link Szósty','Link Siódmy'],
  ];
  return (
    <footer className="bg-white border-t py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="text-2xl font-bold mb-4">Logo</div>
          <p className="text-sm mb-2">Level 1, 12 Sample St, Sydney NSW 2000</p>
          <p className="text-sm mb-2">Contact: 1800 123 4567</p>
          <div className="flex space-x-3 mt-4">
            {['fb','tw','ig','yt'].map(i=>
              <div key={i} className="w-6 h-6 bg-gray-300 rounded-full"></div>
            )}
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-2 gap-4">
          {links.map((col,i)=>(<ul key={i} className="space-y-2">{col.map(l=><li key={l}><a href="#" className="text-sm hover:underline">{l}</a></li>)}</ul>))}
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-xs flex flex-col md:flex-row justify-between">
        <div>© 2025 Detroit Cars. Wszelkie prawa zastrzeżone.</div>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Polityka Prywatności</a>
          <a href="#" className="hover:underline">Warunki Użytkowania</a>
        </div>
      </div>
    </footer>
  );
}
