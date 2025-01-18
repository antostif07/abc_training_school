import { Users, Trophy, ArrowRight, GraduationCap, Layout, Code, Palette } from 'lucide-react';
import AppMenu from './components/app-menu';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700">
        <AppMenu />
        
        <div className="container mx-auto px-24 py-10">
          <div className="flex flex-col md:flex-row items-center gap-1">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Une école de formation professionnelle.
              </h1>
              <p className="mt-4 text-xl text-blue-100">
              Assurer votre avenir en apprenant chez ABC Training School
              </p>
              <div className="mt-8 space-x-4">
                <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
                Commencer
                </button>
                <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition">
                Explorer les cours
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img 
                src="/bg_home.jpg" 
                alt="Students learning"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          Pourquoi choisir ABC Training School ?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full">
                <GraduationCap className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Des Professeurs experts</h3>
              <p className="mt-2 text-gray-600">Apprenez auprès de professionnels du secteur ayant des années d&apos;expérience.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full">
                <Layout className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Apprentissage flexible</h3>
              <p className="mt-2 text-gray-600">Étudiez à votre rythme avec un accès à vie aux cours.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full">
                <Trophy className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">Certificats</h3>
              <p className="mt-2 text-gray-600">Obtenez des certificats reconnus après avoir terminé les cours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          Cours populaires
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Bootcamp de développement web",
                icon: <Code className="h-6 w-6" />,
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Principes fondamentaux du design UI/UX",
                icon: <Palette className="h-6 w-6" />,
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              },
              {
                title: "Notions essentielles en science des données",
                icon: <Layout className="h-6 w-6" />,
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              }
            ].map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover" width={200} height={200}
                />
                <div className="p-6">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      {course.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-gray-500" />
                      <span className="text-gray-500">10 étudiants</span>
                    </div>
                    <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700">
                      <span>En savoir plus</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-20">
        <div className="container mx-auto px-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
          Prêt à commencer votre parcours d&apos;apprentissage ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
          Rejoignez des dizaines d&apos;apprenants déjà inscrits sur ABC Training School.
          </p>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition">
          Commencez dès maintenant
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}