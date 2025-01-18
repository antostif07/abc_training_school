
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-24">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2">
                <picture>
                  <source srcSet="/logo.png" type="image/jpeg" />
                  <img
                    src="/logo.png" 
                    alt="Students learning"
                    className="rounded-lg shadow-xl w-28"
                  />
                </picture>
              </div>
              <p className="mt-4 text-gray-400">
              Soutenir les apprenants grâce à une éducation de qualité.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">À propos de nous</a></li>
                <li><a href="#" className="hover:text-white">Cours</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Centre d&apos;aide</a></li>
                <li><a href="#" className="hover:text-white">Conditions d&apos;utilisation</a></li>
                <li><a href="#" className="hover:text-white">Politique de confidentialité</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contactez-nous</h4>
              <ul className="space-y-2 text-gray-400">
                <li>contact@abctrainingschool.com</li>
                <li>+243 089 99 99 999</li>
                <li>Adresse du bureau</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 ABC Training School. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}