"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"

export default function LocationSharing() {
  const [isSharing, setIsSharing] = useState(false)

  const toggleLocationSharing = () => {
    // Implement location sharing functionality here
    setIsSharing(!isSharing)
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Location Sharing</h2>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={toggleLocationSharing}
        className={`${
          isSharing ? "bg-gradient-to-r from-green-400 to-green-500" : "bg-gradient-to-r from-blue-400 to-blue-500"
        } text-white px-6 py-3 rounded-full flex items-center justify-center w-full font-semibold shadow-md hover:shadow-lg transition-all duration-200`}
      >
        <MapPin className="mr-2" />
        {isSharing ? "Stop Sharing" : "Start Sharing"}
      </motion.button>
    </motion.div>
  )
}

