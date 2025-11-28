import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FBF582] border-b border-[#211217]/10">
      <div className="container mx-auto px-4">
        <div className="flex h-12 items-center justify-center text-sm">
          <p className="text-[#211217]">
            Heidi announces <span className="font-semibold">$65m Series B</span> to accelerate building the AI Care
            Partner for Clinicians
          </p>
        </div>
      </div>
    </header>
  )
}

export function Navigation() {
  return (
    <nav className="sticky top-0 z-40 w-full bg-white border-b border-[#211217]/5">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-[#211217]">
            <img src="/heidi-logo-horizontal.svg" alt="Heidi" className="h-12 w-auto text-[#211217]" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <button className="flex items-center gap-1 text-sm text-[#211217] hover:text-[#755760] transition-colors">
              Product <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <button className="flex items-center gap-1 text-sm text-[#211217] hover:text-[#755760] transition-colors">
              Specialties <ChevronDown className="w-3.5 h-3.5" />
            </button>
            <Link href="/pricing" className="text-sm text-[#211217] hover:text-[#755760] transition-colors">
              Pricing
            </Link>
            <button className="flex items-center gap-1 text-sm text-[#211217] hover:text-[#755760] transition-colors">
              Resources <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-[#211217]">🇦🇺 AU</span>
            <Link href="/contact" className="text-sm text-[#211217] hover:text-[#755760] transition-colors">
              Contact us
            </Link>
            <Button asChild variant="ghost" className="text-sm bg-[#F9F4F1] text-[#211217] hover:text-[#755760] rounded-md px-6">
              <Link href="/login">Log in</Link>
            </Button>
            <Button className="bg-[#FBF582] text-[#211217] hover:bg-[#FBF582]/90 rounded-md px-6">Sign up</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
