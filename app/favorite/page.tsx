'use client'
import { axiosRequest } from '@/utils/axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    // Та же функция очистки имени файла
    const getFileName = (path: string) => {
        if (!path) return '';
        const parts = path.split('/');
        return parts[parts.length - 1];
    };

    async function getClient() {
        try {
            let { data } = await axiosRequest.get(`/Orders`)
            // Судя по твоему JSON, приходит массив объектов напрямую
            setData(Array.isArray(data) ? data : data.orders || []);
        } catch (error) {
            console.error("Ошибка при получении списка заказов:", error);
        } finally {
            setLoading(false);
        }
    }

    async function deleteClient(id: number) {
        if(!confirm("Удалить этот заказ?")) return;
        try {
            await axiosRequest.delete(`/Orders/${id}`)
            getClient();
        } catch (error) {
            console.error("Ошибка при удалении заказа:", error);
        }
    }

    useEffect(() => {
        getClient();
    }, []);

    if (loading) return <div className="p-10 font-black animate-pulse text-indigo-500">LOADING_ORDERS...</div>

    return (
        <div className="p-8 bg-[#0f1115] min-h-screen text-white">
            <h1 className="text-4xl font-black italic mb-10 text-indigo-500 uppercase tracking-tighter">
                Active_Orders (Clients)
            </h1>

            <div className="grid gap-6">
                {data.length > 0 ? data.map((e: any) => (
                    <div key={e.id} className="bg-[#1a1d23] border border-white/5 p-4 rounded-[32px] flex items-center gap-6 group hover:border-indigo-500/50 transition-all shadow-2xl">
                        
                        {/* КАРТИНКА МАШИНЫ ИЗ ЗАКАЗА */}
                        <div className="relative w-40 h-24 overflow-hidden rounded-[20px] bg-black/20 border border-white/5">
                            {e.car?.mainImage ? (
                                <Image 
                                    src={`http://157.180.29.248:5505/api/images/${getFileName(e.car.mainImage)}`}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    alt="Car"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-[10px] text-slate-600 font-bold uppercase">No_Img</div>
                            )}
                        </div>

                        {/* ИНФОРМАЦИЯ О КЛИЕНТЕ И МАШИНЕ */}
                        <div className="flex-grow">
                            <h2 className="text-xl font-black italic uppercase tracking-tight text-slate-200">
                                {e.userName || e.clientName || `User_ID: ${e.userId}`}
                            </h2>
                            <div className="flex items-center gap-3 mt-1">
                                <span className="text-indigo-400 font-black text-xs uppercase italic">
                                    {e.car?.model || "Unknown Unit"}
                                </span>
                                <span className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">
                                    Year: {e.car?.year}
                                </span>
                            </div>
                            <p className="text-[10px] text-slate-500 font-bold mt-2 uppercase">
                                Final Price: <span className="text-green-500">${e.finalPrice?.toLocaleString()}</span>
                            </p>
                        </div>

                        {/* СТАТУС И УПРАВЛЕНИЕ */}
                        <div className="text-right flex flex-col items-end gap-2 pr-4">
                            <div>
                                <p className="text-[9px] font-black text-slate-600 uppercase mb-1">Current Status</p>
                                <span className="bg-green-500/10 text-green-500 px-3 py-1 rounded-full font-black italic text-[10px] border border-green-500/20 uppercase">
                                    {e.status === 0 ? "Active" : "Completed"}
                                </span>
                            </div>
                            <button 
                                onClick={() => deleteClient(e.id)} 
                                className="mt-2 text-red-500 hover:text-white hover:bg-red-500 border border-red-500/30 px-4 py-1.5 rounded-xl text-[10px] font-black transition-all uppercase tracking-widest"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                )) : (
                    <div className="text-slate-500 font-bold italic p-10 border border-dashed border-white/5 rounded-3xl text-center">
                        NO_ORDERS_FOUND_IN_SYSTEM
                    </div>
                )}
            </div>
        </div>
    )
}

export default Page;