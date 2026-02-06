import { oxanium } from '@/fonts/oxanium'
import React from 'react'
import Section from './section1/page'
import { Globe } from "@/components/ui/globe"

const Page = () => {
  return (
    <div className='overflow-x-hidden bg-gradient-to-b from-black via-gray-900 to-black'>
      {/* Hero Section */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black"></div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto">
          <button className='border-2 border-red-600 px-8 py-3 text-red-500 font-semibold rounded-full 
            hover:bg-red-600 hover:text-white hover:scale-110 hover:shadow-2xl hover:shadow-red-600/50 
            transition-all duration-500 transform hover:rotate-3 mb-8 animate-pulse'>
            ABOUT US
          </button>
          
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black uppercase mb-6 
            bg-gradient-to-r from-white via-red-500 to-red-600 bg-clip-text text-transparent
            animate-gradient-x">
            WE ARE CAR
            <span className="text-red-500 animate-ping [animation-duration:2s]">X</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed 
            backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-red-500/20">
            PUSHING THE LIMITS OF AUTOMOTIVE EXCELLENCE WITH 
            <span className="text-red-400 font-bold"> UNMATCHED INTENSITY</span> AND 
            <span className="text-red-400 font-bold"> PRECISION</span>
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-red-500 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Container */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-purple-600 
                rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition duration-500"></div>
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="relative w-full h-[500px] object-cover rounded-3xl 
                shadow-2xl shadow-red-500/30 transform group-hover:scale-[1.02] transition duration-500"
              >
                <source src="/videos/caaaar.mp4" type="video/mp4" />
              </video>
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm 
                px-4 py-2 rounded-full border border-red-500">
                <span className="text-red-400 font-bold">🔥 CARX PERFORMANCE</span>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8">
              <div>
                <button className='border-2 border-red-500 px-6 py-2 text-red-400 
                  rounded-full text-sm font-medium hover:bg-red-500 hover:text-white 
                  transition-all duration-300 transform hover:-translate-y-1'>
                  ABOUT US
                </button>
                <h1 className='text-5xl md:text-6xl font-black uppercase mt-6
                  bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent'>
                  REDEFINING <br />
                  <span className="text-red-500 animate-pulse [animation-duration:3s]">
                    PERFORMANCE
                  </span>
                </h1>
              </div>

              <div className="space-y-6">
                <p className='text-lg text-gray-300 leading-relaxed'>
                  At <span className="text-red-400 font-bold">CARX</span>, we don't just build cars – we engineer experiences that push the boundaries of what's possible. Our commitment to extreme performance and cutting-edge technology drives everything we do.
                </p>
                <p className='text-lg text-gray-300 leading-relaxed'>
                  Every vehicle that bears the CARX name is a testament to our relentless pursuit of perfection, combining raw power with sophisticated engineering.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                {[
                  { value: "500+", label: "Автомобилей", color: "from-red-500 to-orange-500" },
                  { value: "15", label: "Лет на рынке", color: "from-red-600 to-pink-600" },
                  { value: "100%", label: "Довольных клиентов", color: "from-red-400 to-rose-400" }
                ].map((item, index) => (
                  <div key={item.label} 
                    className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 
                    border border-red-500/20 hover:border-red-500 transition-all duration-500 
                    hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30">
                    <h2 className={`text-5xl font-bold bg-gradient-to-r ${item.color} 
                      bg-clip-text text-transparent ${oxanium.className}
                      transition-all duration-500 group-hover:scale-110`}>
                      {item.value}
                    </h2>
                    <p className="mt-2 text-gray-400 group-hover:text-red-400 
                      transition-colors duration-300 font-medium">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Component */}
      <Section />

      {/* Globe Section */}
      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black text-center mb-16
            bg-gradient-to-r from-white via-red-400 to-red-600 bg-clip-text text-transparent
            animate-gradient-x">
            My Market in the World!
          </h1>
          
          <div className="relative h-[600px] rounded-3xl overflow-hidden 
            border-2 border-red-500/30 shadow-2xl shadow-red-500/20">
            <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/10 to-black"></div>
            <Globe className="absolute inset-0 w-full h-full" />
            
            {/* Overlay Info */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center 
              bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-red-500/30">
              <div>
                <h3 className="text-2xl font-bold text-white">Global Presence</h3>
                <p className="text-red-300">50+ countries worldwide</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-red-400">24/7</div>
                <p className="text-gray-300">Global Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed top-1/4 left-10 w-4 h-4 bg-red-500 rounded-full animate-ping [animation-duration:3s]"></div>
      <div className="fixed bottom-1/3 right-10 w-6 h-6 bg-red-600 rounded-full animate-pulse [animation-duration:4s]"></div>
    </div>
  )
}

export default Page