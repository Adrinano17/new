import ShopSection from '@/components/ShopSection'

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-tech-primary">
        My Shop
      </h1>
      <ShopSection />
    </div>
  )
}