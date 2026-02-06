import React from 'react';
import { Flame, Star, Clock, Zap, Users, TrendingUp, ChevronRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

const PremiumCollection = () => {
  const cars = [
    {
      id: 1,
      name: "FERRARI 488",
      brand: "Ferrari",
      tags: ["PREMIUM", "HOT DEAL"],
      engine: "V8 Twin-Turbo",
      horsepower: 661,
      topspeed: 330,
      acceleration: 3.0,
      seats: 2,
      price: 1299,
      imageUrl: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&auto=format&fit=crop",
      gradient: "from-red-600 to-red-800",
      badge: "🔥",
      popular: false
    },
    {
      id: 2,
      name: "LAMBORGHINI HURACAN",
      brand: "Lamborghini",
      tags: ["PREMIUM", "NEW"],
      engine: "V10",
      horsepower: 640,
      topspeed: 325,
      acceleration: 2.9,
      seats: 2,
      price: 1499,
      imageUrl: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w-800&auto=format&fit=crop",
      gradient: "from-yellow-500 to-orange-600",
      badge: "⭐", 
      popular: false
    },
    {
      id: 3,
      name: "PORSCHE 911 GT3",
      brand: "Porsche",
      tags: ["PREMIUM"],
      engine: "Flat-6",
      horsepower: 502,
      topspeed: 318,
      acceleration: 3.4,
      seats: 4,
      price: 999,
      imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop",
      gradient: "from-gray-800 to-red-700",
      badge: "🏆",
      popular: false
    },
    {
      id: 4,
      name: "MCLAREN 720S",
      brand: "McLaren",
      tags: ["POPULAR"],
      engine: "V8 Twin-Turbo",
      horsepower: 710,
      topspeed: 341,
      acceleration: 2.8,
      seats: 2,
      price: 1399,
      imageUrl: "https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=800&auto=format&fit=crop",
      gradient: "from-purple-700 to-pink-600",
      badge: "🔥",
      popular: true
    },
    {
      id: 5,
      name: "AUDI R8 V10",
      brand: "Audi",
      tags: ["POPULAR"],
      engine: "V10",
      horsepower: 562,
      topspeed: 324,
      acceleration: 3.2,
      seats: 2,
      price: 899,
      imageUrl: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&auto=format&fit=crop",
      gradient: "from-blue-600 to-gray-800",
      badge: "⚡",
      popular: true
    },
    {
      id: 6,
      name: "CORVETTE C8 Z06",
      brand: "Chevrolet",
      tags: ["POPULAR"],
      engine: "V8",
      horsepower: 670,
      topspeed: 312,
      acceleration: 2.6,
      seats: 2,
      price: 799,
      imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop",
      gradient: "from-red-700 to-orange-600",
      badge: "🚀",
      popular: true
    }
  ];

  return (
    <div className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #dc2626 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600/20 to-red-800/20 
            rounded-full border border-red-500/30 mb-6 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-red-400 animate-spin-slow" />
            <span className="text-red-400 font-semibold tracking-wider">PREMIUM COLLECTION</span>
            <Sparkles className="w-5 h-5 text-red-400 animate-spin-slow" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent">
              EXCLUSIVE SUPER CARS
            </span>
          </h2>
          
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Experience the pinnacle of automotive engineering with our hand-picked selection
            of <span className="text-red-400 font-semibold">world-class performance vehicles</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Zap, value: "1000+", label: "Total HP Average", color: "from-red-500 to-orange-500" },
            { icon: Clock, value: "2.9s", label: "Avg 0-100 km/h", color: "from-red-600 to-pink-600" },
            { icon: TrendingUp, value: "330+", label: "Top Speed km/h", color: "from-red-400 to-rose-400" },
            { icon: Users, value: "98%", label: "Client Satisfaction", color: "from-red-700 to-yellow-600" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 
                hover:border-red-500/50 transition-all duration-500 group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color}`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
              </div>
              <div className="text-gray-400 text-sm group-hover:text-red-300 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div
              key={car.id}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl 
                border border-gray-800 group-hover:border-red-500/50 transition-all duration-500
                overflow-hidden h-full">
                
                <div className="relative h-64 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-b ${car.gradient} opacity-70 z-10`} />
                  
                  <img 
                    src={car.imageUrl}
                    alt={car.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  
                  {car.tags.includes("HOT DEAL") && (
                    <div className="absolute top-4 right-4 z-20 animate-pulse">
                      <div className="relative">
                        <div className="absolute inset-0 bg-red-500 rounded-full blur-lg" />
                        <div className="relative bg-gradient-to-r from-red-600 to-orange-600 
                          px-4 py-2 rounded-full text-white font-bold text-sm flex items-center gap-2">
                          <Flame className="w-4 h-4" />
                          HOT DEAL
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {car.tags.includes("NEW") && (
                    <div className="absolute top-4 left-4 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg" />
                        <div className="relative bg-gradient-to-r from-blue-600 to-cyan-500 
                          px-4 py-2 rounded-full text-white font-bold text-sm">
                          NEW
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {car.popular && (
                    <div className="absolute top-16 left-4 z-20">
                      <div className="relative">
                        <div className="absolute inset-0 bg-purple-500 rounded-full blur-lg" />
                        <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 
                          px-4 py-2 rounded-full text-white font-bold text-sm flex items-center gap-2">
                          <Star className="w-4 h-4" />
                          POPULAR
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4 z-20">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{car.badge}</div>
                      <div>
                        <div className="text-2xl font-bold text-white">{car.name}</div>
                        <div className="text-red-300 font-semibold">{car.brand}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {car.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-semibold 
                          ${tag === "PREMIUM" 
                            ? "bg-gradient-to-r from-red-600 to-red-800 text-white" 
                            : tag === "HOT DEAL"
                            ? "bg-gradient-to-r from-orange-600 to-red-600 text-white"
                            : tag === "NEW"
                            ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"
                            : "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                          }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-800/50 rounded-xl p-4 group-hover:bg-gray-800/80 
                      transition-all duration-300">
                      <div className="text-gray-400 text-sm mb-1">Engine</div>
                      <div className="text-white font-semibold">{car.engine}</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4 group-hover:bg-gray-800/80 
                      transition-all duration-300">
                      <div className="text-gray-400 text-sm mb-1">Power</div>
                      <div className="text-white font-semibold flex items-center gap-1">
                        <Zap className="w-4 h-4 text-red-400" />
                        {car.horsepower} HP
                      </div>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4 group-hover:bg-gray-800/80 
                      transition-all duration-300">
                      <div className="text-gray-400 text-sm mb-1">Top Speed</div>
                      <div className="text-white font-semibold">{car.topspeed} km/h</div>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4 group-hover:bg-gray-800/80 
                      transition-all duration-300">
                      <div className="text-gray-400 text-sm mb-1">0-100 km/h</div>
                      <div className="text-white font-semibold flex items-center gap-1">
                        <Clock className="w-4 h-4 text-red-400" />
                        {car.acceleration}s
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300">{car.seats} Seats</span>
                    </div>
                    {car.popular && (
                      <div className="flex items-center gap-2 text-yellow-400">
                        <Star className="w-4 h-4 fill-yellow-400" />
                        <span className="text-sm font-semibold">MOST POPULAR</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-800">
                    <div className="group/price">
                      <div className="text-gray-400 text-sm">STARTING FROM</div>
                      <div className="text-3xl font-bold text-white flex items-center gap-2">
                        ${car.price}
                        <span className="text-gray-400 text-lg">/day</span>
                      </div>
                    </div>
                    
                    <button className="group/btn relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 
                      hover:from-red-500 hover:to-red-600 text-white font-bold py-3 px-6 
                      rounded-xl transition-all duration-300 transform hover:scale-105 
                      hover:shadow-2xl hover:shadow-red-500/30 flex items-center gap-2">
                      <span>RESERVE</span>
                      <ChevronRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                        translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                    </button>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-500/5 to-transparent 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              <div className={`absolute -inset-0.5 bg-gradient-to-r ${car.gradient} rounded-3xl 
                opacity-0 group-hover:opacity-30 blur-xl transition duration-500 pointer-events-none`} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-up-delay">
            <Link href={'/allProduct'}>
          <button className="group relative inline-flex items-center gap-3 bg-transparent 
            border-2 border-red-500/30 hover:border-red-500 text-white font-bold py-4 px-8 
            rounded-xl text-lg duration-300  hover:scale-105 
            hover:shadow-2xl hover:shadow-red-500/20">
            <span>VIEW ALL COLLECTIONS</span>
            <div className="flex items-center gap-1">
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </div>
          </button>
              </Link>
          
          <p className="text-gray-500 mt-4 text-sm">
            <span className="text-red-400">⚠️ Limited availability</span> • Instant confirmation • 24/7 support
          </p>
        </div>
      </div>
    </div>
  );
};

export default PremiumCollection;