"use client"
import { motion } from "framer-motion"
import { Shield } from "lucide-react"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="inline-block bg-gradient-to-br from-purple-600 to-pink-500 p-4 rounded-full shadow-lg"
      >
        <Shield className="w-16 h-16 text-white" />
      </motion.div>
      <h1 className="text-5xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
        Women Safety App
      </h1>
      <p className="text-xl mt-2 text-gray-600">Stay safe and empowered</p>
    </motion.header>
  )
}

