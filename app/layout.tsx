import type React from "react"
import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "Heidi - AI Care Partner for Clinicians",
  description: "Get time back. Move care forward. Your AI scribe capturing notes, summaries, and follow-ups as you go.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/heidi_logo.jpeg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body className="font-sans antialiased bg-[#FCFAF8]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
