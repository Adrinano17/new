'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    
    const result = await signIn('credentials', {
      redirect: false,
      email: credentials.email,
      password: credentials.password
    })

    if (result?.error) {
      toast({
        title: "Login Failed",
        description: "Invalid credentials",
        variant: "destructive"
      })
    } else {
      toast({
        title: "Login Successful",
        description: "Welcome back!"
      })
      router.push('/shop')
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={credentials.email}
              onChange={(e) => setCredentials({
                ...credentials, 
                email: e.target.value
              })}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({
                ...credentials, 
                password: e.target.value
              })}
              required
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}