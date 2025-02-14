import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function ShopSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();

  const products = [
    { id: 1, name: "Faithful Tech Guide", price: "$10", description: "Learn how faith and tech intersect." },
    { id: 2, name: "Football Devotional", price: "$15", description: "Inspire your game with faith-based readings." },
    { id: 3, name: "Smart Scripture Device", price: "$50", description: "Tech for scripture reading and sharing." },
  ];

  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      alert("You need to sign in or sign up before adding items to the cart.");
      router.push("/auth/signin");
      return;
    }
    setCartCount(cartCount + 1);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Shop Our Products</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p>{product.description}</p>
            <p className="text-lg font-bold">{product.price}</p>
            <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
