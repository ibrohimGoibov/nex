"use client";

import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

import { CoolMode } from "@/components/ui/cool-mode";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Heart } from "lucide-react";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const Header = () => {
  const [user, setUser] = useState<any>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("user")
      if (storedUser) setUser(JSON.parse(storedUser))
    } catch {
      localStorage.removeItem("user")
    }

    setToken(localStorage.getItem("token"))
  }, [])
  return (
    <>
      <div className="relative">
        <div
          className="fixed top-0 left-0 right-0 z-50 
    bg-white/70 dark:bg-black/70 
      backdrop-blur-md border-b border-white/10 dark:border-white/5 
      transition-all duration-300"
        >
          <div className="flex items-center justify-between w-[90%] m-auto p-[10px]">
            <div className="num1 text-[30px] font-[700] cursor-pointer">
              <span className="text-carx-accent">CAR</span>
              <span className="text-red-700 font-[800]">X</span>
            </div>

            <div className="lg:flex hidden items-center gap-[20px] text-[16px] font-medium ">
              <Link href={"/"}>
                <p className="hover:text-red-600 cursor-pointer transition">
                  Главная
                </p>
              </Link>
              <p className="hover:text-red-600 cursor-pointer transition">
                Каталог
              </p>
              <Link href={`/product`}>
                <p className="hover:text-red-600 cursor-pointer transition">
                  Аренда
                </p>
              </Link>
              <Link href={`/bye`}>
                <p className="hover:text-red-600 cursor-pointer transition">
                  Купить
                </p>
              </Link>
              <Link href={"/about"}>
                <p className="hover:text-red-600 cursor-pointer transition">
                  О компании
                </p>
              </Link>
              <p className="hover:text-red-600 cursor-pointer transition">
                Контакты
              </p>
            </div>
            <div className="lg:hidden block"></div>

            <div className="flex items-center gap-[10px]">
              <input
                type="text"
                className="w-[250px] px-[20px] py-[5px] rounded-[50px] outline-0 border 
              bg-gray-100/50 dark:bg-gray-800/50 
              lg:block hidden
              hover:border-red-600 transition border-gray-300 dark:border-gray-700"
                placeholder="Поиск авто..."
              />
              <CoolMode>
                <header className="h-[64px] flex items-center justify-between px-6 shadow">

          <div className="relative group">
            <div className="flex items-center gap-2 cursor-pointer px-2 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1s1-4 6-4s6 3 6 4" />
              </svg>
              {!token && <Link href="/login">Вход</Link>}
            </div>

            {token && (
              <div className="absolute right-0 top-full mt-2 bg-white text-black shadow-lg rounded-[10px] p-[10px] w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <p className="font-semibold">{user?.userName || user?.name || "Пользователь"}</p>
                <p className="text-gray-500 text-sm">{user?.email || ""}</p>
                <button
                  className="mt-2 text-red-500 text-sm"
                  onClick={() => {
                    localStorage.removeItem("token")
                    localStorage.removeItem("user")
                    window.location.reload()
                  }}
                >
                  Выйти
                </button>
              </div>
            )}
          </div>
        </header>
              </CoolMode>
              <AnimatedThemeToggler />
              <Link href={"/favorite"}>
                <Heart />
              </Link>
              <Sheet>
                <SheetTrigger asChild>
                  <button className="text-[20px] lg:hidden block">☰</button>
                </SheetTrigger>

                <SheetContent side="left" className="w-[320px] sm:w-[400px]">
                  <Link href={"/"}>
                    <p className="hover:text-red-600 cursor-pointer transition">
                      Главная
                    </p>
                  </Link>
                  <p className="hover:text-red-600 cursor-pointer transition">
                    Каталог
                  </p>
                  <Link href={`/product`}>
                    <p className="hover:text-red-600 cursor-pointer transition">
                      Аренда
                    </p>
                  </Link>
                  <Link href={`/bye`}>
                    <p className="hover:text-red-600 cursor-pointer transition">
                      Купить
                    </p>
                  </Link>
                  <Link href={"/about"}>
                    <p className="hover:text-red-600 cursor-pointer transition">
                      О компании
                    </p>
                  </Link>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
