import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Master Chen Wei',
    role: 'Yang Family Instructor',
    image: 'https://images.pexels.com/photos/8436730/pexels-photo-8436730.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Lineage bridges the gap I\'ve always struggled with - keeping students engaged between classes. The AI feedback is remarkably accurate.',
    rating: 5
  },
  {
    name: 'Sarah Martinez',
    role: 'Tai Chi Student (2 years)',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'Finally, I know if I\'m practicing correctly at home. The personalized feedback has accelerated my progress tremendously.',
    rating: 5
  },
  {
    name: 'Dr. James Liu',
    role: 'Wellness Practitioner',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'As someone who travels frequently, Lineage keeps me connected to my practice. It\'s like having my sifu with me everywhere.',
    rating: 5
  },
  {
    name: 'Maria Rodriguez',
    role: 'Beginner Practitioner',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'I was intimidated by Tai Chi, but Lineage makes learning approachable. The step-by-step guidance builds my confidence daily.',
    rating: 5
  },
  {
    name: 'Robert Kim',
    role: 'Advanced Student',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'The progress tracking is incredible. Seeing my rooting stability improve from 60% to 90% over months is deeply motivating.',
    rating: 5
  },
  {
    name: 'Linda Thompson',
    role: 'Health & Wellness Coach',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
    content: 'I recommend Lineage to all my clients interested in Tai Chi. The authentic lineage wisdom combined with AI is revolutionary.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Practitioners Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From beginners to masters, discover how Lineage is transforming Tai Chi practice across the globe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-emerald-100 group-hover:text-emerald-200 transition-colors duration-300">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                "{testimonial.content}"
              </p>

              {/* User Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-emerald-100 group-hover:ring-emerald-200 transition-all duration-300"
                />
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors duration-300">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-50 rounded-2xl transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-8">Endorsed by traditional schools and modern practitioners</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">YANG FAMILY</div>
            <div className="text-2xl font-bold text-gray-400">TAI CHI UNION</div>
            <div className="text-2xl font-bold text-gray-400">WELLNESS INSTITUTE</div>
            <div className="text-2xl font-bold text-gray-400">MARTIAL ARTS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;