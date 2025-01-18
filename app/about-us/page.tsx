import { Globe, Target, Sparkles } from 'lucide-react';
import AppMenu from '../components/app-menu';
import Footer from '../components/footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <AppMenu />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Notre Histoire</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Transforming education through technology and innovation, making quality learning accessible to everyone.
          </p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre Mission</h2>
              <p className="text-gray-600 mb-8">
              Chez ABC Training School, nous croyons que l&apos;éducation doit être accessible à tous, partout dans le monde. Notre mission est de briser les barrières à l&apos;apprentissage et de créer des opportunités de développement personnel et professionnel grâce à une éducation en ligne innovante.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Target className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Democratizing education worldwide</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Fostering innovation in learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700">Building a global learning community</span>
                </div>
              </div>
            </div>
            <div>
              <picture>
                <source srcSet="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" type="image/jpeg" />
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Students collaborating"
                  className="rounded-lg shadow-xl"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-24">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">100K+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Expert Instructors</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600">Courses Available</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Countries Reached</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Notre Equipe</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Ephraim",
                role: "CEO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              },
              {
                name: "Gradi",
                role: "Communication Manager",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <picture>
                  <source srcSet={`${member.image}?fm=webp`} type="image/webp" />
                  <source srcSet={`${member.image}?fm=jpg`} type="image/jpeg" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto mb-6 object-cover"
                  />
                </picture>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}