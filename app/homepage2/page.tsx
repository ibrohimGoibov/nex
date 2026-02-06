 import img from '@/public/image copy 3.png'
import img1 from '@/public/image copy 4.png'
import img2 from '@/public/image copy 5.png'
import Image from 'next/image'
import { Car, Currency, HeadphoneOff, Headphones, Shield, ArrowRight, Phone } from 'lucide-react'
import img3 from '@/public/lol.png'

const page = () => {
  return (
    <div>
      <section className="bg-[#111] py-24 overflow-hidden">
        <div className="text-center animate-fade-in">

          <p className='text-[18px] text-red-600 tracking-[0.2em] animate-slide-down'>
            КАТЕГОРИИ
          </p>
          <h1 className="text-[50px] font-[700] shake">
  <span className="text-red-600 shake-strong">ВЫБЕРИТЕ</span> СВОЙ СТИЛЬ
</h1>

          <p className='text-gray-500 mt-[10px] animate-slide-up'>
            Автомобили на любой вкус и бюджет
          </p>
          
          <div className="mx-auto mt-6 w-32 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent 
            animate-shimmer-line"></div>
        </div>
        
        <div className="mx-auto w-[90%] mt-[50px]">
          <div className="grid gap-8 lg:grid-cols-3 grid-cols-1 ">
            {[
              {
                title: 'СПОРТКАРЫ',
                desc: 'Максимальная скорость и адреналин',
                img: img,
                icon: '🔥',
                color: 'from-red-600/80 to-red-900/40'
              },
              {
                title: 'БИЗНЕС-КЛАСС',
                desc: 'Престиж и комфорт премиум-уровня',
                img: img1,
                icon: '👑',
                color: 'from-yellow-600/80 to-amber-900/40'
              },
              {
                title: 'ЭКОНОМ-КЛАСС',
                desc: 'Доступность и надёжность',
                img: img2,
                icon: '🚗',
                color: 'from-blue-600/80 to-blue-900/40'
              }
            ].map((item, index) => (
              <div
                key={item.title}
                className="group relative h-[420px] overflow-hidden rounded-[28px] bg-black
                  border border-gray-800 hover:border-red-600/50
                  transition-all duration-500 hover:scale-[1.02]
                  hover:shadow-[0_0_40px_rgba(220,38,38,0.2)]
                  animate-card-float"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute inset-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="h-full w-full object-cover 
                      transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} via-black/80 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                  
                  <div className="absolute inset-0 border-2 border-transparent 
                    group-hover:border-red-600/30 rounded-[28px] 
                    transition-all duration-500"></div>
                </div>
                
                <div className="relative z-10 flex h-full flex-col justify-end p-8">
                  <div className="items-center gap-3 mb-3">
                    <span className="text-3xl animate-bounce-slow group-hover:scale-125 
                      transition-transform duration-300">
                      {item.icon}
                    </span>
                    <h3 className="text-2xl font-black text-white 
                      group-hover:text-red-400 transition-colors duration-300">
                      {item.title}
                    </h3>

                  <p className="mb-6 text-gray-300 group-hover:text-white 
                    transition-colors duration-300">
                    {item.desc}
                  </p>
                  
                  <button className="group/btn w-fit cursor-pointer font-bold 
                    text-red-600 hover:text-white 
                    flex items-center gap-2">
                    <span className="group-hover/btn:translate-x-2 transition-transform duration-300">
                      Смотреть все
                    </span>
                    <ArrowRight className="group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
                
                <div className="absolute inset-0 bg-red-600/5 opacity-0 
                  group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#111] p-[30px] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/5 rounded-full 
          blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/5 rounded-full 
          blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        
        <div className="text-center mt-[50px] relative z-10">
          <p className='text-red-600 tracking-[0.2em] animate-slide-down'>
            ПРЕИМУЩЕСТВА
          </p>
          <h1 className='text-[60px] font-[700] animate-glow-pulse'>
            ПОЧЕМУ <span className="text-red-600 animate-text-shimmer">MAWIN</span>
          </h1>
          <p className='mt-[10px] text-[17px] text-gray-600 animate-slide-up'>
            Мы создаём лучший опыт покупки и аренды автомобилей
          </p>
          
          <div className="flex justify-center gap-2 mt-4">
            {[1, 2, 3, 4].map((dot) => (
              <div key={dot} className="w-2 h-2 bg-red-600 rounded-full animate-pulse" 
                style={{ animationDelay: `${dot * 0.2}s` }}></div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-center mt-[40px] flex-wrap gap-[20px] relative z-10">
          {[
            {
              icon: <Shield className="group-hover:rotate-12 transition-transform duration-500" />,
              title: 'ГАРАНТИЯ КАЧЕСТВА',
              desc: 'Все автомобили проходят тщательную проверку',
              delay: '0ms'
            },
            {
              icon: <Currency className="group-hover:rotate-12 transition-transform duration-500" />,
              title: 'ЛУЧШИЕ ЦЕНЫ',
              desc: 'Конкурентные предложения на рынке',
              delay: '100ms'
            },
            {
              icon: <Headphones className="group-hover:rotate-12 transition-transform duration-500" />,
              title: 'ПОДДЕРЖКА 24/7',
              desc: 'Всегда готовы помочь вам',
              delay: '200ms'
            },
            {
              icon: <Car className="group-hover:rotate-12 transition-transform duration-500" />,
              title: 'БЫСТРАЯ ДОСТАВКА',
              desc: 'Доставим авто в любую точку',
              delay: '300ms'
            }
          ].map((item, index) => (
            <div
              key={item.title}
              className="group bg-black h-[220px] w-[290px] p-[30px] px-[27px] 
                rounded-[20px] relative overflow-hidden
                border border-gray-800 hover:border-red-600
                transition-all duration-500 hover:scale-105
                animate-fade-in hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]"
              style={{ animationDelay: item.delay }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-600/5 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="absolute inset-0 rounded-[20px] border-2 border-transparent 
                group-hover:border-red-600/50 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-[60px] h-[60px] m-auto flex items-center justify-center 
                  rounded-[50%] bg-gradient-to-br from-red-600 to-red-800
                  text-white group-hover:from-white group-hover:to-gray-200
                  group-hover:text-red-600 hover:transition transition-all duration-300
                  group-hover:scale-110 group-hover:rotate-[360deg]
                  group-hover:shadow-[0_0_25px_rgba(220,38,38,0.6)]">
                  {item.icon}
                </div>
                
                <h2 className='text-[22px] font-[700] mt-4 text-center
                  group-hover:text-red-400 transition-colors duration-300'>
                  {item.title}
                </h2>
                
                <p className='text-gray-600 mt-[10px] text-center
                  group-hover:text-white transition-colors duration-300'>
                  {item.desc}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 
                w-0 h-1 bg-red-600 group-hover:w-3/4 
                transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      <section className="relative flex h-[520px] items-center justify-center 
        overflow-hidden bg-black group">
        <div className="absolute inset-0">
          <Image
            src={img3}
            alt="CTA Background"
            fill
            className="h-full w-full object-cover opacity-40 
              group-hover:scale-110 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 
            group-hover:opacity-70 transition-opacity duration-500" />
          
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-red-600 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 4}s`
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center animate-fade-in">
          <p className="mb-4 text-sm tracking-widest text-red-600 animate-slide-down">
            НАЧНИТЕ ПРЯМО СЕЙЧАС
          </p>

          <h2 className="mb-6 text-[48px] font-black uppercase text-white
            [text-shadow:0_0_30px_rgba(255,0,0,0.6)] animate-glow-pulse">
            ГОТОВЫ К <span className="text-red-600 animate-text-shimmer">ПОКУПКЕ</span>?
          </h2>

          <p className="mx-auto mb-10 max-w-[600px] text-gray-300 animate-slide-up">
            Оставьте заявку и получите персональное предложение от наших экспертов
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 animate-slide-up-delay">
            <button className="group/btn1 flex items-center gap-3 rounded-full 
              bg-gradient-to-r from-red-600 to-red-800 px-10 py-4 font-bold 
              text-white transition-all duration-300 
              hover:from-red-700 hover:to-red-900 
              hover:shadow-[0_0_40px_rgba(220,38,38,0.8)]
              hover:scale-105">
              ОФОРМИТЬ ЗАЯВКУ
              <span className="text-lg group-hover/btn1:translate-x-2 
                group-hover/btn1:-translate-y-1 transition-transform duration-300">
                ↗
              </span>
            </button>

            <button className="group/btn2 flex items-center gap-3 rounded-full 
              border border-white/60 px-10 py-4 font-semibold text-white 
              transition-all duration-300 
              hover:bg-gradient-to-r hover:from-white hover:to-gray-200 
              hover:text-black hover:border-transparent
              hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]
              hover:scale-105">
              <Phone className="group-hover/btn2:animate-ring" />
              +7 (495) 123-45-67
            </button>
          </div>
          
          <p className="mt-8 text-sm text-gray-400 animate-fade-in-delay">
            ⚡ Ответ в течение <span className="text-red-400 font-bold">15 минут</span>
          </p>
        </div>
        
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-32 
          bg-gradient-to-b from-transparent via-red-600 to-transparent 
          animate-speed-line opacity-20"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-32 
          bg-gradient-to-b from-transparent via-red-600 to-transparent 
          animate-speed-line opacity-20" style={{ animationDelay: '0.5s' }}></div>
      </section>
    </div>
  )
}

export default page