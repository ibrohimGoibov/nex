'use client'
import { axiosRequest } from '@/utils/axios';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react'

const page = () => {
    const [data, setData] = useState('');
    const id = useParams()
    async function getById() {
        try {
            let {data} = await axiosRequest.get(`/Cars/${id}`)
            setData(data.data)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        getById()
    }, [])
  return (
    <div>
        <h1>{data?.price}</h1>
    </div>
  )
}

export default page