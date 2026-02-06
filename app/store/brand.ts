import { axiosRequest } from '@/utils/axios'
import { create } from 'zustand'

export const useBeareBrand = create((set) => ({
  data: [],
  loading: false,
  getBrands: async () => {
    set({ loading: true })
    try {
     const {data} = await axiosRequest.get('/Brands')
     set({ data: data, loading: false })
     console.log(data);
    } catch (e) {
      set({ loading: false })
    }
  },
}))
