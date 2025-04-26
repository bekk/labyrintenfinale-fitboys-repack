const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-12 mt-24 border-t border-gray-200">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-400 to-emerald-600"></div>
            <span className="text-xl font-bold text-gray-900">Reniew</span>
          </div>
          <p className="text-gray-600 mb-4">
            Revolusjonerende AI-løsninger for TV-produksjon.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Produkter</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                AI-analyse
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                Innholdsgenerering
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                Automatisk redigering
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                Seertallsprediksjon
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Ressurser</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                Dokumentasjon
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                Veiledninger
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                Blogg
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                Kundehistorier
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Selskap</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                Om oss
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                Karriere
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                Kontakt
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-teal-600">
                Personvern
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500">
        <p>© 2025 Reniew. Alle rettigheter reservert.</p>
      </div>
    </footer>
  );
};

export default Footer;
