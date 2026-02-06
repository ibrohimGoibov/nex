'use client'
import { useState } from "react";
import Animation from './animation/page'
const Footer = () => {
  return (
    <div className="mt-[50px]">
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      <footer id="footer" className="bg-carx-dark border-t border-gray-800 p-[30px]">
    <div className="max-w-[1440px] mx-auto px-8">
        <div className="lg:flex block  items-center justify-evenly gap-12 mb-12">
            <div className="col-span-2">
                <div className="font-display text-4xl font-black mb-4">
                    <span className="text-red-600">CAR</span><span className="text-white">X</span>
                </div>
                <p className="text-gray-400 mb-6">
                    Премиальные автомобили от компании Mawin. Продажа и аренда с 2009 года.
                </p>
                <div className="flex items-center space-x-4">
                    <a href="#" className="w-10 h-10 bg-carx-gray hover:bg-red-600 rounded-full flex items-center justify-center transition">
                        <i data-fa-i2svg=""><svg className="svg-inline--fa fa-instagram" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-carx-gray hover:bg-red-600 rounded-full flex items-center justify-center transition">
                        <i data-fa-i2svg=""><svg className="svg-inline--fa fa-facebook" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-carx-gray hover:bg-red-600 rounded-full flex items-center justify-center transition">
                        <i data-fa-i2svg=""><svg className="svg-inline--fa fa-youtube" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="youtube" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg></i>
                    </a>
                    <a href="#" className="w-10 h-10 bg-carx-gray hover:bg-red-600 rounded-full flex items-center justify-center transition">
                        <i data-fa-i2svg=""><svg className="svg-inline--fa fa-telegram" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="telegram" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path></svg></i>
                    </a>
                </div>
            </div>
            <div>
                <h4 className="font-display font-bold text-lg mb-4">Каталог</h4>
                <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-red-600 transition">Спортивные авто</a></li>
                    <li><a href="#" className="hover:text-red-600 transition">Бизнес-класс</a></li>
                    <li><a href="#" className="hover:text-red-600 transition">Эконом-класс</a></li>
                    <li><a href="#" className="hover:text-red-600 transition">Новинки</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-display font-bold text-lg mb-4">Компания</h4>
                <ul className="space-y-2 text-gray-400">
                    <li><a href="#" className="hover:text-red-600 transition">О Mawin</a></li>
                    <li><a href="#" className="hover:text-red-600 transition">Аренда</a></li>
                    <li><a href="#" className="hover:text-red-600 transition">Контакты</a></li>
                    <li><a href="#" className="hover:text-red-600 transition">Вакансии</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-display font-bold text-lg mb-4">Контакты</h4>
                <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start space-x-2">
                        <i className="text-red-600 mt-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-phone" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg></i>
                        <span>+7 (495) 123-45-67</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <i className="text-red-600 mt-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-envelope" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"></path></svg></i>
                        <span>info@mawin.ru</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <i className="text-red-600 mt-1" data-fa-i2svg=""><svg className="svg-inline--fa fa-location-dot" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="location-dot" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path></svg></i>
                        <span>Москва, ул. Примерная, 123</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="pt-8 border-t border-gray-800 lg:flex block items-center justify-between text-gray-500 text-sm mt-[10px]">
            <p>© 2024 CarX by Mawin. Все права защищены.</p>
            <div className="flex items-center space-x-6 mt-[10px]">
                <a href="#" className="hover:text-red-600 transition">Политика конфиденциальности</a>
                <a href="#" className="hover:text-red-600 transition">Условия использования</a>
            </div>
        </div>
    </div>
</footer>
<Animation />
    </div>
  )
}

export default Footer
