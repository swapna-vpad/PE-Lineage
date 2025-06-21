import React from 'react';
import { Target, BookOpen, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Personalized Feedback',
    description: 'AI-powered movement analysis provides specific, actionable feedback on your form, helping you understand exactly what to improve.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: BookOpen,
    title: 'Authentic Lineage Wisdom',
    description: 'Access traditional Yang Family teachings, master quotes, and authentic principles directly integrated into your practice sessions.',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: TrendingUp,
    title: 'Measurable Progress',
    description: 'Track your development in core skills like "Rooting" and "Qi Flow" with tangible metrics that show your growth over time.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Bridge to Your Teacher',
    description: 'Seamlessly connect your home practice with classroom instruction, ensuring continuity in your martial arts journey.',
    color: 'from-orange-500 to-red-500'
  }
];

const Benefits = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Lineage?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your solitary practice into a guided, meaningful journey with AI-powered mentorship that scales traditional wisdom.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-transparent transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                  {benefit.description}
                </p>

                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-3xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">25+</div>
              <div className="text-lg opacity-90">Years of Lineage</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Students Guided</div>
            </div>
            <div>
              <div className="text-4xl lg:text-5xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Practice Retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;