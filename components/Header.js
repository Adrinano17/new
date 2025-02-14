'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <header className={`w-full shadow-md p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100"}`}>
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <a href="/">Gospel Tech & Football</a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/journey" className="hover:underline">Journey</a>
          <a href="/shop" className="hover:underline">Shop</a>
          <Button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun /> : <Moon />}
          </Button>
          <Button>
            <ShoppingCart /> ({cartCount})
          </Button>
          {!isLoggedIn ? (
            <>
              <Button onClick={() => router.push("/auth/signin")}>Sign In</Button>
              <Button onClick={() => router.push("/auth/signup")}>Sign Up</Button>
            </>
          ) : (
            <Button onClick={handleLogout}>Sign Out</Button>
          )}
        </div>
      </nav>
    </header>
  );
}
