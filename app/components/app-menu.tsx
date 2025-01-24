import Link from 'next/link';

export default function AppMenu() {
    return (
        <nav className="container mx-auto px-24 py-8 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <picture>
                <source srcSet="/logo.png" type="image/jpeg" />
                <img
                  src="/logo.png" 
                  alt="Students learning"
                  className="rounded-lg shadow-xl w-28" width={200} height={200}
                />
              </picture>
            </div>
            <div className="hidden md:flex space-x-8 text-white">
                <Link href="/" className="hover:text-blue-200">Accueil</Link>
                <Link href="/courses" className="hover:text-blue-200">Cours</Link>
                <Link href="/about-us" className="hover:text-blue-200">A Propos</Link>
                {/* <a href="#" className="hover:text-blue-200">Pricing</a> */}
                <Link href="/contact" className="hover:text-blue-200">Contact</Link>
            </div>
            <div className="space-x-4">
              <button className="px-4 py-2 text-white hover:text-blue-200">Se connecter</button>
              <button className="px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50">S&apos;Inscrire</button>
            </div>
          </div>
        </nav>
    )
}