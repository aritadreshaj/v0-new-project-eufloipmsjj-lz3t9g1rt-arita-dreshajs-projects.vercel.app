import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-neutral-200">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="text-3xl font-light tracking-tight">
            a r i t a d r e s h a j
          </Link>
          <div className="flex items-center gap-4">
            <button className="p-2">
              <span className="sr-only">Suche</span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <Link href="/en" className="hidden md:block">
              en
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative">
          <div className="aspect-[16/9] md:aspect-[21/9] w-full relative">
            <Image
              src="/public/headline.jpg"
              alt="Contemporary architectural design showcasing innovative spatial concepts by Arita Dreshaj"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6 md:p-10">
            <div className="container mx-auto">
              <h1 className="text-white text-2xl md:text-4xl font-light max-w-2xl">
                Exploring history to shape the future of architecture.
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl font-light mb-6">About</h2>
              <p className="text-neutral-700 mb-4">
                Arita Dreshaj is an architect and urban designer whose research draws on historical theory to examine
                the social dimensions of space and memory.
              </p>
              <p className="text-neutral-700 mb-6">
                Since 2020, she has been involved in a range of projects, from new constructions to reconstructions and
                urban competitions. Her work has been recognized with several awards, including four first prizes, one
                honorable mention, and two third places.
              </p>
              <Button variant="outline" className="group">
                Mehr erfahren
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div>
              <h2 className="text-2xl font-light mb-6">Projekte</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Öffentliche Gebäude", "Bürogebäude", "Wohngebäude", "Kulturbauten"].map((category) => (
                  <Link
                    key={category}
                    href={`/projekte/${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="border border-neutral-200 p-4 hover:bg-neutral-50 transition-colors"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-neutral-100 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-light mb-10 text-center">Ausgewählte Projekte</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group">
                  <div className="aspect-[4/3] relative overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-neutral-200" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <h3 className="text-lg font-medium mb-1">Projekt {i}</h3>
                  <p className="text-neutral-600 text-sm">Berlin, Deutschland</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" className="group">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-light mb-4">Kontakt</h3>
              <address className="not-italic text-neutral-300">
                <p>Arita Dreshaj</p>
                <p>Straße des 17. Juni</p>
                <p>10623 Berlin</p>
                <p className="mt-2">aritadreshaj@outlook.com</p>
                <p>+49 163 814 6878</p>
              </address>
            </div>
            <div>
              <h3 className="text-lg font-light mb-4">Navigation</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>
                  <Link href="/projekte" className="hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/studio" className="hover:text-white transition-colors">
                    Studio
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-white transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/contakt" className="hover:text-white transition-colors">
                    Contakt
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-light mb-4">Folgen Sie uns</h3>
              <div className="flex gap-4">
                {["Instagram", "LinkedIn", "Facebook"].map((social) => (
                  <Link key={social} href="#" className="text-neutral-300 hover:text-white transition-colors">
                    {social}
                  </Link>
                ))}
              </div>
              <div className="mt-8 text-sm text-neutral-400">
                <p>© 2024 Arita Dreshaj</p>
                <div className="flex gap-4 mt-2">
                  <Link href="/impressum" className="hover:text-neutral-300 transition-colors">
                    Impressum
                  </Link>
                  <Link href="/datenschutz" className="hover:text-neutral-300 transition-colors">
                    Datenschutz
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 bg-neutral-800 text-white p-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">
          To use the website to its full extent, the activation of cookies, external media, and visitor statistics is
          required.
        </p>
        <div className="flex gap-2">
          <Button variant="outline" className="text-white border-white hover:bg-white/10">
            Decline
          </Button>
          <Button className="bg-white text-neutral-900 hover:bg-neutral-200">OK</Button>
        </div>
      </div>
    </div>
  )
}
