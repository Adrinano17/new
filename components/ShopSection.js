"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ShopSection() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const router = useRouter();

  const products = [
    { 
      id: 1, 
      name: "Faithful Tech Guide", 
      price: "$10", 
      description: "Learn how faith and tech intersect in today's digital world.",
      image: "/api/placeholder/300/200"
    },
    { 
      id: 2, 
      name: "Football Devotional", 
      price: "$15", 
      description: "Daily inspirational readings connecting sports and spirituality.",
      image: "/api/placeholder/300/200"
    },
    { 
      id: 3, 
      name: "Smart Scripture Device", 
      price: "$50", 
      description: "Portable device for scripture reading with audio and sharing features.",
      image: "/api/placeholder/300/200"
    },
    { 
      id: 4, 
      name: "Code & Faith E-Course", 
      price: "$35", 
      description: "Online course exploring ethical coding principles guided by faith.",
      image: "/api/placeholder/300/200"
    },
    { 
      id: 5, 
      name: "Tech Ministry Toolkit", 
      price: "$45", 
      description: "Resources and tools for launching tech ministries in churches.",
      image: "/api/placeholder/300/200"
    },
    { 
      id: 6, 
      name: "Football Strategy Bible", 
      price: "$25", 
      description: "Game strategies with spiritual insights for coaches and players.",
      image: "/api/placeholder/300/200"
    },
    { 
      id: 7, 
      name: "Digital Sabbath Journal", 
      price: "$18", 
      description: "Journal for mindful tech breaks and spiritual reflection.",
      image: "/api/placeholder/300/200"
    },
    { 
      id: 8, 
      name: "Coder's Prayer Book", 
      price: "$12", 
      description: "Devotional specifically written for software developers.",
      image: "/api/placeholder/300/200"
    },
    { 
      id: 9, 
      name: "AI Ethics & Faith Guide", 
      price: "$22", 
      description: "Navigating AI development from a faith perspective.",
      image: "/api/placeholder/300/200"
    },
    { 
      id: 10, 
      name: "Team Spirit Devotional App", 
      price: "$7.99", 
      description: "Mobile app for team spiritual growth and shared prayer requests.",
      image: "/api/placeholder/300/200"
    },
    { 
      id: 11, 
      name: "Gospel Tech Podcast Subscription", 
      price: "$5/month", 
      description: "Premium access to weekly discussions on tech through a gospel lens.",
      image: "/api/placeholder/300/200"
    },
    { 
      id: 12, 
      name: "Faith-Driven Developer's Conference Ticket", 
      price: "$199", 
      description: "Virtual conference pass for faith-centered tech professionals.",
      image: "/api/placeholder/300/200"
    }
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
    <div className="container mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Faith, Tech & Sports Shop</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-800">
            <div className="h-48 relative">
              <Image 
                src={product.image} 
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 h-20 overflow-hidden">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold">{product.price}</p>
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}