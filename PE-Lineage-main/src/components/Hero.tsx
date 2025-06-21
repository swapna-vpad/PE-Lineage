import React, { useState } from 'react';
import { Play, ArrowRight, Zap, Target, Heart } from 'lucide-react';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2 text-emerald-600 font-medium">
              <Zap className="w-5 h-5" />
              <span>AI-Powered Tai Chi Mentorship</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Master Tai Chi
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent block">
                Between Classes
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
              Bridge the gap between classroom and home practice with your personalized AI mentor. 
              Get real-time feedback, customized training plans, and authentic Yang Family wisdom.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                <span>Begin Your Practice</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-emerald-400 hover:text-emerald-600 transition-all duration-200">
                Watch Demo
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-emerald-500" />
                <span className="text-gray-600">Personalized Feedback</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-gray-600">Traditional Wisdom</span>
              </div>
            </div>
          </div>

          {/* Right Content - Video Section */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
              {!isVideoPlaying ? (
                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/8436730/pexels-photo-8436730.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Tai Chi Practice with AI Guidance"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="group bg-white/90 backdrop-blur-sm w-20 h-20 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
                    >
                      <Play className="w-8 h-8 text-emerald-600 ml-1 group-hover:scale-110 transition-transform duration-200" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <p className="text-sm font-medium text-gray-800">
                        "Your form shows 85% rooting stability - focus on sinking your qi"
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-80 bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-600">AI Tai Chi Mentor Demo</p>
                    <button
                      onClick={() => setIsVideoPlaying(false)}
                      className="mt-2 text-emerald-600 hover:text-emerald-800 font-medium"
                    >
                      Close Demo
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;