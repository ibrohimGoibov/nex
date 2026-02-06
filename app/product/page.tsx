import React from 'react';
import { Calendar, MapPin, Filter, ChevronDown, Zap, Car, Shield, Star } from 'lucide-react';
import Section from './section/page'
const VehicleSearchSection = () => {
  return (
    <div className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-red-900/20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.1),transparent_50%)]"></div>
        
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, #dc2626 1px, transparent 1px),
                              linear-gradient(to bottom, #dc2626 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/10 rounded-full blur-xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-red-600/10 rounded-full blur-xl animate-float-medium"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-red-400/10 rounded-full blur-xl animate-float-fast"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 rounded-full border border-red-500/30 mb-4">
            <Zap className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="text-red-400 text-sm font-medium">PREMIUM FLEET</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your <span className="text-red-400">Dream Car</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience luxury and performance with our exclusive collection
          </p>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-xl rounded-3xl border border-red-500/20 
          shadow-2xl shadow-red-500/10 p-6 md:p-8 mb-8 animate-slide-up">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="group relative animate-fade-in-delay-100">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-xl 
                opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
              <div className="relative bg-gray-800/50 rounded-xl p-4 border border-gray-700 
                group-hover:border-red-500 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-red-400 group-hover:animate-pulse" />
                  <span className="text-gray-400 text-sm font-medium">PICK-UP LOCATION</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full bg-transparent text-white text-lg placeholder-gray-500 
                    focus:outline-none focus:ring-0 group-hover:placeholder-red-400/50 
                    transition-colors duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r 
                  from-transparent via-red-500 to-transparent opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="group relative animate-fade-in-delay-200">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-xl 
                opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
              <div className="relative bg-gray-800/50 rounded-xl p-4 border border-gray-700 
                group-hover:border-red-500 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-red-400 group-hover:animate-pulse" />
                  <span className="text-gray-400 text-sm font-medium">DROP-OFF LOCATION</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white text-lg">Same as pick-up</span>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-400 text-sm">Auto</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative animate-fade-in-delay-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-xl 
                opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
              <div className="relative bg-gray-800/50 rounded-xl p-4 border border-gray-700 
                group-hover:border-red-500 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-red-400 group-hover:animate-pulse" />
                  <span className="text-gray-400 text-sm font-medium">PICK-UP DATE</span>
                </div>
                <div className="text-white text-lg flex items-center gap-2">
                  <span className="bg-red-500/20 px-2 py-1 rounded-md">Jan 30, 2026</span>
                  <div className="w-1 h-1 bg-red-400 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>

            <div className="group relative animate-fade-in-delay-400">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-xl 
                opacity-0 group-hover:opacity-30 blur transition duration-500"></div>
              <div className="relative bg-gray-800/50 rounded-xl p-4 border border-gray-700 
                group-hover:border-red-500 transition-all duration-300">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-red-400 group-hover:animate-pulse" />
                  <span className="text-gray-400 text-sm font-medium">DROP-OFF DATE</span>
                </div>
                <div className="text-white text-lg flex items-center gap-2">
                  <span className="bg-red-500/20 px-2 py-1 rounded-md">Feb 2, 2026</span>
                  <div className="text-red-400 text-sm">3 days</div>
                </div>
              </div>
            </div>
          </div>

          <button className="group w-full bg-gradient-to-r from-red-600 to-red-700 
            hover:from-red-500 hover:to-red-600 text-white font-bold py-4 px-6 
            rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02] 
            hover:shadow-2xl hover:shadow-red-500/50 flex items-center justify-center gap-3 
            animate-pulse-slow">
            <span>SEARCH VEHICLES</span>
            <div className="group-hover:translate-x-2 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </button>
        </div>

        <div className="animate-slide-up-delay">
          <div className="flex flex-wrap items-center justify-between mb-8">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <div className="relative">
                <div className="absolute -inset-1 bg-red-500/20 blur-lg rounded-full"></div>
                <div className="relative bg-gradient-to-br from-red-600 to-red-800 
                  rounded-2xl p-4 border border-red-500/30">
                  <div className="text-3xl font-bold text-white animate-count-up">
                    87
                  </div>
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">VEHICLES</div>
                <div className="text-red-400 text-sm">Available now</div>
              </div>
            </div>

            <button className="group flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm 
              px-6 py-3 rounded-xl border border-gray-700 hover:border-red-500 
              transition-all duration-300 hover:bg-red-500/10">
              <Filter className="w-5 h-5 text-gray-400 group-hover:text-red-400" />
              <span className="text-white font-medium">SORT: PERFORMANCE</span>
              <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-red-400 
                group-hover:rotate-180 transition-transform duration-300" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {[
              { icon: Car, label: "SPORTS CARS", count: 24, active: true },
              { icon: Star, label: "LUXURY", count: 18 },
              { icon: Shield, label: "SUVS", count: 22 },
              { icon: Zap, label: "ELECTRIC", count: 15 },
              { icon: Filter, label: "VINTAGE", count: 8 },
              { icon: "MORE", label: "MORE FILTERS", count: null }
            ].map((category, index) => (
              <button
                key={category.label}
                className={`group relative overflow-hidden rounded-xl p-4 text-center 
                  transition-all duration-300 transform hover:-translate-y-1 
                  ${category.active 
                    ? 'bg-gradient-to-br from-red-600 to-red-800 border-red-500' 
                    : 'bg-gray-800/50 border border-gray-700 hover:border-red-500'
                  } animate-fade-in-delay-${(index + 1) * 100}`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {category.icon === "MORE" ? (
                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-gray-700 
                      flex items-center justify-center group-hover:bg-red-500 
                      transition-colors duration-300">
                      <span className="text-white">+</span>
                    </div>
                  ) : (
                    <category.icon className={`w-8 h-8 mx-auto mb-2 
                      ${category.active ? 'text-white' : 'text-gray-400 group-hover:text-red-400'}`} />
                  )}
                  
                  <div className={`text-sm font-semibold mb-1 
                    ${category.active ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    {category.label}
                  </div>
                  
                  {category.count !== null && (
                    <div className={`text-xs px-2 py-1 rounded-full inline-block
                      ${category.active 
                        ? 'bg-red-500/30 text-white' 
                        : 'bg-gray-700/50 text-gray-400 group-hover:bg-red-500/30 group-hover:text-white'
                      }`}>
                      {category.count} cars
                    </div>
                  )}
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-0.5 
                  ${category.active ? 'bg-white' : 'bg-transparent group-hover:bg-red-500'} 
                  transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "🔥 HOT DEALS",
              "⚡ INSTANT BOOKING",
              "🛡️ FULL INSURANCE",
              "🌟 VIP SERVICE",
              "🚀 HIGH PERFORMANCE",
              "💎 LUXURY PACKAGE"
            ].map((tag, index) => (
              <div
                key={tag}
                className="px-4 py-2 bg-gradient-to-r from-red-500/10 to-red-600/10 
                  rounded-full border border-red-500/30 text-red-400 text-sm font-medium
                  hover:from-red-500/20 hover:to-red-600/20 hover:border-red-500/50 
                  transition-all duration-300 transform hover:scale-105 cursor-pointer
                  animate-bounce-subtle"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Section />
    </div>
  );
};

export default VehicleSearchSection;