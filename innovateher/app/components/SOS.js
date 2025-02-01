"use client"
import { motion } from "framer-motion"
import { AlertCircle } from "lucide-react"

export default function SOS() {
  const handleSOS = () => {
    // Implement SOS functionality here
    alert("SOS alert sent!")
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Emergency SOS</h2>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleSOS}
        className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-full flex items-center justify-center w-full font-semibold shadow-md hover:shadow-lg transition-all duration-200"
      >
        <AlertCircle className="mr-2" />
        Send SOS Alert
      </motion.button>
    </motion.div>
  )
}

