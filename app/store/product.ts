import { axiosRequest } from '@/utils/axios'
import { create } from 'zustand'

export const useBearStore = create((set) => ({
  data: [],
  loading: false,
  getProduct: async () => {
    set({ loading: true })
    try {
     const {data} = await axiosRequest.get('/Cars')
     set({ data: data, loading: false })
     console.log(data);
     
    } catch (e) {
      set({ loading: false })
    }
  },
  deleteProduct: async (id: number) => {
    set({ loading: true })
    try {
     await axiosRequest.delete(`/Cars/${id}`)
     set({ loading: false })
    } catch (e) {
      set({ loading: false })
    }
  }
}))
