import { useState } from 'react';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">Logo</div>
        {/* desktop menu */}
        <nav className="hidden md:flex space-x-8 text-sm">
          <a href="#" className="hover:underline">Proces zakupu</a>
          <a href="#" className="hover:underline">Nasza oferta</a>
          <a href="#" className="hover:underline">Kalkulator cen</a>
          <a href="#" className="hover:underline">Salon samochodowy</a>
        </nav>
        <div className="hidden md:flex space-x-4">
          <button className="px-4 py-2 border rounded">Zaloguj</button>
          <button className="px-4 py-2 bg-black text-white rounded">Zarejestruj</button>
        </div>
        {/* mobile burger */}
        <button className="md:hidden" onClick={()=>setMobileOpen(!mobileOpen)}>
          <svg className="w-6 h-6" fill="currentColor">{mobileOpen ? /* X */ <path d="M6 18L18 6M6 6l12 12"/> : /* ☰ */ <path d="M4 6h16M4 12h16M4 18h16"/>}</svg>
        </button>
      </div>
      {/* mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="px-4 py-6 space-y-4">
            {['Proces zakupu','Nasza oferta','Kalkulator cen','Salon samochodowy'].map(label=>
              <a key={label} href="#" className="block text-base hover:underline">{label}</a>
            )}
            <button className="w-full px-4 py-2 border rounded mb-2">Zaloguj</button>
            <button className="w-full px-4 py-2 bg-black text-white rounded">Zarejestruj</button>
          </nav>
        </div>
      )}
    </header>
  );
}
