'use client'

import { create } from 'zustand'
import { axiosRequest } from '@/utils/axios'

export const useLikeStore = create((set, get:any) => ({
  data: [],
  loading: false,

  getFavorite: async () => {
    set({ loading: true })
    try {
      const res = await axiosRequest.get('/Favorites/my')
      set({ data: res.data, loading: false })
    } catch (error) {
      set({ loading: false })
    }
  },

  likeCar: async (carId:any) => {
    try {
      await axiosRequest.post(`/Favorites/car/${carId}`)
      set({ data: [...get().data, carId] })
    } catch (error) {
        console.error(error);
    }
  },

  unlikeCar: async (carId:any) => {
    try {
      await axiosRequest.delete(`/Favorites/car/${carId}`)
      set({ data: get().data.filter((id:any) => id !== carId) })
    } catch (error) {
      console.error(error)
    }
  },

  isLiked: (carId:any) => {
    return get().data.includes(carId)
  }
}))
