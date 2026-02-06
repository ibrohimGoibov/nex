'use client'

import { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { ConfigProvider, Space } from 'antd'
import { useRegisterStore } from '../store/login'

const Login = () => {
  const [show, setShow] = useState(false)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const postAccountLogin = useRegisterStore((s: any) => s.postAccountLogin)
  const loading = useRegisterStore((s: any) => s.loading)

  const handleLogin = () => {
    postAccountLogin({
      userName,
      password,
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 mt-[-40px]">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6">Log in</h1>

        <div className="relative mb-4">
          <UserOutlined className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
          <input
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full bg-white border-[#2563EB] text-black rounded-md px-12 py-3"
            placeholder="Email or username"
          />
        </div>

        <div className="relative mb-2">
          <LockOutlined className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg" />
          <input
            type={show ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-white border-[#2563EB] text-black rounded-md px-12 py-3 pr-12"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {show ? '🙈' : '👁️'}
          </button>
        </div>

        <ConfigProvider>
          <Space direction="vertical" className="w-full">
            <button
              disabled={!userName || !password || loading}
              onClick={handleLogin}
              className="h-12 text-lg font-semibold mt-[20px] rounded-md w-[450px] text-white bg-[#2563EB]"
            >
              {loading ? 'Loading...' : 'Log in'}
            </button>
          </Space>
        </ConfigProvider>
      </div>
    </div>
  )
}

export default Login
