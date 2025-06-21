import React from 'react';
import { Camera, Brain, Target, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Camera,
    title: 'Capture Your Practice',
    description: 'Use your device camera to record your Tai Chi forms. Our AI analyzes your movements in real-time.',
    example: 'Movement analysis in progress...',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Brain,
    title: 'AI Analysis & Feedback',
    description: 'Advanced algorithms compare your form to Yang Family principles and provide specific improvement suggestions.',
    example: '"Focus on sinking your qi deeper"',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Target,
    title: 'Personalized Training Arc',
    description: 'Receive a customized 30-day practice plan that adapts to your progress and focuses on your specific needs.',
    example: 'Week 1: Foundation & Rooting',
    color: 'from-purple-500 to-pink-500'
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How Lineage Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the perfect blend of ancient wisdom and modern technology. Your AI mentor guides every step of your Tai Chi journey.
          </p>
        </div>

        {/* Interactive Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-24 left-0 right-0">
            <div className="flex items-center justify-center space-x-8">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-emerald-300 to-blue-300"></div>
              <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                >
                  {/* Step Card */}
                  <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Example */}
                    <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-emerald-300">
                      <p className="text-sm text-gray-700 font-mono">
                        {step.example}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300`}></div>
                  </div>

                  {/* Arrow for Mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-8">
                      <ArrowRight className="w-6 h-6 text-gray-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Practice?
            </h3>
            <p className="text-gray-600 mb-6">
              Join practitioners who've discovered the power of AI-guided Tai Chi training.
            </p>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2">
              <span>Start Your Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;