'use client'
import { axiosRequest } from '@/utils/axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { Heart, Trash2, DollarSign, Car } from 'lucide-react';
import Link from 'next/link';

interface Favorite {
    id: number;
    type: string;
    carId: number;
    model: string;
    brand: string;
    price: number;
    image: string;
}

const FavoritesPage = () => {
    const [favorites, setFavorites] = useState<Favorite[]>([])
    const [isLoading, setIsLoading] = useState(true)

   async function fetchFavorites() {
     try {
         const { data } = await axiosRequest.get(`/Favorites/my`)
         setFavorites(data)
     } catch (error) {
         console.error(error);
     } finally {
         setIsLoading(false)
     }
    }

   async function deleteFavorite(id: number) {
    try {
        await axiosRequest.delete(`/Favorites/car/${id}`)
        setFavorites(prev => prev.filter(fav => fav.id !== id))
    } catch (error) {
        console.error(error);
    }
}

    useEffect(() => {
        fetchFavorites()
    }, [])

    if (isLoading) return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="animate-pulse">
                    <div className="h-8 bg-red-900/30 rounded w-48 mb-8"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {favorites.map((_, i) => (
                            <div key={i} className="h-64 bg-gray-800/50 rounded-xl"></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black pt-24 px-4 pb-12">
            <div className="max-w-7xl mx-auto">
                <div className="mb-10">
                    <div className="flex items-center gap-3 mb-4">
                        <Heart className="w-10 h-10 text-red-600 animate-pulse" fill="currentColor" />
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
                            ИЗБРАННЫЕ АВТО
                        </h1>
                    </div>
                    <p className="text-gray-400 text-lg">
                        Коллекция ваших агрессивных машин ({favorites.length})
                    </p>
                </div>

                {favorites.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {favorites.map((car) => (
                            <div
                                key={car.id}
                                className="group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-red-900/30 hover:border-red-600 rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-red-900/20"
                            >
                                <button
                                    onClick={() => deleteFavorite(car.id)}
                                    className="absolute top-4 right-4 z-20 p-2 bg-black/80 hover:bg-red-900/90 rounded-full transition-all duration-200 group-hover:scale-110"
                                >
                                    <Trash2 className="w-5 h-5 text-red-500" />
                                </button>

                                <div className="relative h-48 overflow-hidden bg-gradient-to-b from-red-900/20 to-black">
                                    <Image
                                        src={car.image || '/placeholder-car.jpg'}
                                        alt={`${car.brand} ${car.model}`}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                                    
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-gradient-to-r from-red-700 to-red-900 text-white text-sm font-bold rounded-full uppercase tracking-wider">
                                            {car.type}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h3 className="text-2xl font-bold text-white">
                                                {car.brand}
                                            </h3>
                                            <Car className="w-6 h-6 text-red-500" />
                                        </div>
                                        <p className="text-3xl font-black bg-gradient-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
                                            {car.model}
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-red-900/30 to-black rounded-xl border border-red-900/50">
                                        <div className="flex items-center gap-2">
                                            <DollarSign className="w-5 h-5 text-red-400" />
                                            <span className="text-gray-300">Цена:</span>
                                        </div>
                                        <span className="text-2xl font-bold text-white">
                                            {car.price.toLocaleString()} $
                                        </span>
                                    </div>

                                    <button className="w-full mt-6 py-3 bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/30 active:scale-95">
                                        ПОДРОБНЕЕ
                                    </button>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 group-hover:via-red-600/20 transition-all duration-1000 opacity-0 group-hover:opacity-100" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <div className="relative mb-8">
                            <Heart className="w-32 h-32 text-red-900/50" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Heart className="w-16 h-16 text-red-600 animate-pulse" fill="currentColor" />
                            </div>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">
                            ПУСТОТА ЗДЕСЬ...
                        </h2>
                        <p className="text-gray-400 text-lg max-w-md mb-8">
                            Добавляйте агрессивные автомобили в избранное, чтобы они появились здесь
                        </p>
                        <Link href={'/bye'}>
                        <button className="px-8 py-3 bg-gradient-to-r from-red-700 to-red-900 hover:from-red-600 hover:to-red-800 text-white font-bold rounded-xl transition-all duration-300 hover:scale-105">
                            КАТАЛОГ АВТО
                        </button>
                        </Link>
                    </div>
                )}

                <div className="mt-12 flex items-center justify-center gap-4">
                    <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
                    <span className="text-red-500 font-bold tracking-widest uppercase text-sm">АГРЕССИВНЫЙ ВЫБОР</span>
                    <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-red-600 to-transparent" />
                </div>
            </div>
        </div>
    )
}

export default FavoritesPage;