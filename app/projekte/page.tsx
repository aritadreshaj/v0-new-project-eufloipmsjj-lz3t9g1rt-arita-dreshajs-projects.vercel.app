import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function ProjectsPage() {
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
            <Link href="/en/projekte" className="hidden md:block">
              en
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-8">
          <Button variant="ghost" className="group p-0" asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Zurück
            </Link>
          </Button>
        </div>

        <h1 className="text-3xl md:text-4xl font-light mb-12">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="group">
              <div className="aspect-[4/3] relative overflow-hidden mb-4">
                <div className="absolute inset-0 bg-neutral-200" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <h3 className="text-lg font-medium mb-1">A Way Forward, A Way Back {i + 1}</h3>
              <p className="text-neutral-600 text-sm mb-2">Burim, Kosova</p>
              <p className="text-neutral-600 text-sm">2020</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-light mb-8">Kategorien</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Öffentliche Gebäude",
              "Bürogebäude",
              "Wohngebäude",
              "Kulturbauten",
              "Bildungsbauten",
              "Industriebauten",
              "Städtebau",
              "Innenarchitektur",
            ].map((category) => (
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
      </main>

      <footer className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-light mb-4">Kontakt</h3>
              <address className="not-italic text-neutral-300">
                <p>Arita Dreshaj</p>
                <p className="mt-2">aritadreshaj@outlook.com</p>
                <p>+49 163 814 68 78</p>
              </address>
            </div>
            <div>
              <h3 className="text-lg font-light mb-4">Navigation</h3>
              <ul className="space-y-2 text-neutral-300">
                <li>
                  <Link href="/projects" className="hover:text-white transition-colors">
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
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
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
                <p>© {new Date().getFullYear()} Arita Dreshaj</p>
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
    </div>
  )
}
