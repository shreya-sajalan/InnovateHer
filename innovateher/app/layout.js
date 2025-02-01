import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Women Safety App",
  description: "Stay safe with our comprehensive women safety features",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100`}>
        <div className="min-h-screen p-4 md:p-8">{children}</div>
      </body>
    </html>
  )
}

