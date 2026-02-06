'use client'
import { Oxanium } from 'next/font/google'
import { Key, MoveRight, Heart, Gauge, Clock } from 'lucide-react'
import Image from 'next/image'
import img from '@/public/image copy 8.png'
import img1 from '@/public/image copy 6.png'
import img2 from '@/public/image copy 7.png'
import { useState } from 'react'
import { oxanium } from '@/fonts/oxanium'
import { axiosRequest } from '@/utils/axios'

const Page = () => {
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [data, setData] = useState([]);

  async function getProduct() {
    try {
      let {data} = await axiosRequest.get(``)
    } catch (error) {
      console.error(error);
    }
  }

  const handleMouseMove = (e:any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white">
  <section className="relative h-screen w-full overflow-hidden">
    <video 
      autoPlay 
      muted 
      loop 
      playsInline 
      className="absolute inset-0 h-full w-full object-cover w-[100%]"
    >
      <source src="/videos/hero.mp4" type="video/mp4" />
    </video>

    <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-transparent dark:from-black/50" />

    <div className="relative z-10 flex h-full items-center ml-[40px]">
      <div className="max-w-2xl px-4 animate-fade-in">
        <p className="text-[18px] font-bold text-red-600 tracking-[0.2em] animate-slide-down">
          MAWIN PREMIUM CARS
        </p>

        <h1 className="text-[62px] font-extrabold uppercase text-black dark:text-white
          [text-shadow:0_0_20px_rgba(255,0,0,0.8),0_0_40px_rgba(255,0,0,0.4)] 
          animate-glow-pulse">
          ПОЧУВСТВУЙ <br /> 
          <span className="text-red-600 animate-text-shimmer">МОЩЬ И СКОРОСТЬ</span>
        </h1>

        <p className="mt-4 lg:w-[630px] w-[300px] text-gray-700 dark:text-gray-300 animate-slide-up">
          Эксклюзивные спортивные автомобили и премиум-класс. Покупка и аренда с максимальным комфортом.
        </p>

        <div className="mt-4 lg:flex block items-center gap-5 animate-slide-up-delay">
          <button className="group flex items-center gap-2 rounded-full bg-red-600 px-9 py-4 font-bold text-white 
            hover:shadow-[0_0_30px_rgba(220,38,38,0.8)] hover:scale-105 
            transition-all duration-300 animate-pulse-slow">
            КУПИТЬ АВТО 
            <MoveRight className="group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          <button className="group flex items-center gap-2 rounded-full border-[3px] border-black dark:border-white 
            px-9 py-4 font-bold transition-all duration-300 
            hover:bg-gradient-to-r hover:from-red-600 hover:to-red-800 hover:text-white 
            hover:border-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] 
            dark:hover:from-red-600 dark:hover:to-red-800">
            АРЕНДОВАТЬ 
            <Key className="group-hover:rotate-90 transition-transform duration-500" />
          </button>
        </div>

        <div className="mt-6 lg:flex block gap-12 animate-fade-in-delay">
          {[
            { value: "500+", label: "Автомобилей" },
            { value: "15", label: "Лет на рынке" },
            { value: "100%", label: "Довольных клиентов" }
          ].map((item, index) => (
            <div key={item.label} className="group">
              <h2 className={`text-[45px] font-bold text-red-600 ${oxanium.className}
                transition-all duration-500 group-hover:text-white 
                group-hover:drop-shadow-[0_0_15px_rgba(220,38,38,0.8)]`}>
                {item.value}
              </h2>
              <p className="mt-[-10px] text-gray-600 dark:text-gray-400 
                group-hover:text-red-400 transition-colors duration-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="absolute top-1/2 right-20 opacity-10">
      <div className="w-0.5 h-32 bg-red-600 animate-speed-line"></div>
    </div>
  </section>

  <section className="py-24 dark:bg-gradient-to-b from-black to-gray-900 relative">
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent animate-shimmer-line"></div>
    
    <div className="mx-auto max-w-[1440px] px-8">
      <div className="mb-12 flex items-center justify-between">
        <div>
          <p className="mb-3 text-sm tracking-widest text-red-600 animate-slide-down">
            ПОПУЛЯРНЫЕ МОДЕЛИ
          </p>
          <h2 className="text-5xl font-black relative inline-block">
            ХИТЫ ПРОДАЖ
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-red-600 
              animate-pulse-slow"></span>
          </h2>
        </div>
        <button className="group flex items-center gap-2 rounded-full dark:bg-carx-gray 
          px-8 py-3 font-semibold transition-all duration-300 
          hover:bg-red-600 hover:text-white hover:shadow-[0_0_25px_rgba(220,38,38,0.6)]
          hover:translate-x-2">
          Все автомобили 
          <MoveRight className="group-hover:translate-x-2 lg:block hidden transition-transform duration-300" />
        </button>
      </div>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
        {[
          { title:'Ferrari 488 GTB', image: img1, power:'670 л.с.', time:'3.0 сек', speed:'330 км/ч', price:'25 000 000 ₽' },
          { title:'Mercedes-Benz S-Class', image: img2, power:'435 л.с.', time:'4.8 сек', speed:'250 км/ч', price:'12 500 000 ₽' },
          { title:'Lamborghini Huracán', image: img, power:'640 л.с.', time:'2.9 сек', speed:'325 км/ч', price:'28 000 000 ₽' }
        ].map((car, index) => (
          <div key={car.title} 
            className="group overflow-hidden rounded-2xl dark:bg-carx-gray/50 
              border border-transparent hover:border-red-600/30
              transition-all duration-500 hover:scale-[1.02]
              hover:shadow-[0_0_40px_rgba(220,38,38,0.2)] 
              animate-card-float"
            style={{ animationDelay: `${index * 100}ms` }}>
            <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">

            <div className="relative h-64 overflow-hidden">
              <Image 
                src={car.image} 
                alt={car.title} 
                fill 
                className="object-cover transition-transform duration-700 
                group-hover:scale-110 group-hover:rotate-1" 
                />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 via-transparent to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <button className="absolute right-4 top-4 flex h-10 w-10 items-center 
                justify-center rounded-full bg-black/50 hover:bg-red-600 
                transition-all duration-300 hover:scale-110 
                hover:shadow-[0_0_15px_rgba(220,38,38,0.8)]">
                <Heart className="group-hover:fill-white group-hover:scale-110 transition-all duration-300" />
              </button>
            </div>
                  </div>

            <div className="p-6">
              <h3 className="mb-4 text-2xl font-bold group-hover:text-red-400 
                transition-colors duration-300">
                {car.title}
              </h3>

              <div className="mb-4 flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1 transition-all duration-300 
                  group-hover:text-red-400">
                  <Gauge size={16} className="group-hover:animate-spin-slow" />
                  {car.power}
                </span>
                <span className="flex items-center gap-1 transition-all duration-300 
                  group-hover:text-red-400">
                  <Clock size={16} className="group-hover:animate-pulse" />
                  {car.time}
                </span>
                <span className="transition-all duration-300 group-hover:text-red-400">
                  {car.speed}
                </span>
              </div>

              <div className="flex items-center justify-between border-t 
                border-gray-300 dark:border-gray-700 pt-4">
                <div>
                  <p className="text-xs text-gray-500">Цена от</p>
                  <p className="text-2xl font-bold text-red-600 
                    group-hover:animate-text-glow">
                    {car.price}
                  </p>
                </div>
                <button className="rounded-full bg-red-600 px-6 py-2 font-semibold 
                  text-white transition-all duration-300 
                  hover:bg-red-700 hover:px-8 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]">
                  Подробнее
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>
  )
}

export default Page
