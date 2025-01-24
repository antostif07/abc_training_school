import { Search, Filter, Star, Clock, Users, ArrowRight } from 'lucide-react';
import AppMenu from '../components/app-menu';
import Footer from '../components/footer';

export default function Courses() {
  const courses = [
    {
      title: "Complete Web Development Bootcamp",
      category: "Development",
      level: "Beginner to Advanced",
      duration: "48 hours",
      students: "15,234",
      rating: 4.8,
      instructor: "John Smith",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "UI/UX Design Masterclass",
      category: "Design",
      level: "Intermediate",
      duration: "36 hours",
      students: "12,543",
      rating: 4.9,
      instructor: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Data Science and Machine Learning",
      category: "Data Science",
      level: "Advanced",
      duration: "56 hours",
      students: "8,765",
      rating: 4.7,
      instructor: "Michael Chen",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Digital Marketing Essentials",
      category: "Marketing",
      level: "Beginner",
      duration: "24 hours",
      students: "10,987",
      rating: 4.6,
      instructor: "Emily Rodriguez",
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Mobile App Development with React Native",
      category: "Development",
      level: "Intermediate",
      duration: "40 hours",
      students: "9,876",
      rating: 4.8,
      instructor: "David Kim",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Business Analytics and Intelligence",
      category: "Business",
      level: "Intermediate",
      duration: "32 hours",
      students: "7,654",
      rating: 4.7,
      instructor: "Lisa Wang",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <AppMenu />

      {/* Search Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
            Decouvrez nos cours en ligne
          </h1>
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for courses..."
                  className="w-full pl-12 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="bg-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-50">
                <Filter className="h-5 w-5 text-blue-600" />
                <span className="text-blue-600 font-semibold">Filters</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {["All Courses", "Development", "Design", "Business", "Marketing", "Data Science", "IT & Software"].map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full ${
                  index === 0 ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <picture>
                  <source srcSet={`${course.image}?fm=webp`} type="image/webp" />
                  <source srcSet={`${course.image}?fm=jpg`} type="image/jpeg" />
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                </picture>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600">{course.category}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">by {course.instructor}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students} Etudiants
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{course.level}</span>
                    <button className="flex items-center text-blue-600 hover:text-blue-700">
                      Voir le cours
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}