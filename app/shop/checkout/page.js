'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { createOrder } from '@/lib/actions'

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Integrate with payment gateway (e.g., Stripe)
    try {
      const order = await createOrder({
        ...formData,
        items: cart,
        total: calculateTotal()
      })
     
    } catch (error) {
     
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Checkout</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input 
            placeholder="Full Name" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <Input 
            type="email" 
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <Input 
            placeholder="Shipping Address"
            value={formData.address}
            onChange={(e) => setFormData({...formData, address: e.target.value})}
          />
          <Button type="submit">Complete Payment</Button>
        </form>
      </CardContent>
    </Card>
  )
}