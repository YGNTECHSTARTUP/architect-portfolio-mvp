"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {  Moon, Sun } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
// import { ThemeToggle } from "./theme-toggle"
import { useTheme } from "next-themes"

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/#contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-custom flex items-center justify-between h-20">
        <Link href="/" className="font-playfair text-2xl font-bold tracking-tight">
          Lohitha<span className="text-muted-foreground">Mendu</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "link-underline text-lg transition-colors",
                pathname === route.path ? "text-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {route.name}
            </Link>
          ))}
          {/* <ThemeToggle /> */}
          <div className="mt-auto">
        <Button
          variant="ghost"
          size="icon"
          className="w-full p-2"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
        <div className="mt-auto">
        <Button
          variant="ghost"
          size="icon"
          className="w-full p-2"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>
      
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 bg-background z-40 p-6">
          <nav className="flex flex-col space-y-6 text-center">
            {routes.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={cn(
                  "text-2xl py-2 transition-colors",
                  pathname === route.path ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

