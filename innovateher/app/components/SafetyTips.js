"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"

const safetyTips = [
  "Always be aware of your surroundings",
  "Trust your instincts",
  "Keep your phone charged and with you",
  "Share your location with trusted friends or family",
  "Learn basic self-defense techniques",
]

export default function SafetyTips() {
  const [currentTip, setCurrentTip] = useState(0)

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % safetyTips.length)
  }

  const prevTip = () => {
    setCurrentTip((prev) => (prev - 1 + safetyTips.length) % safetyTips.length)
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Safety Tips</h2>
      <div className="relative h-24 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentTip}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center text-gray-700 font-medium"
          >
            {safetyTips[currentTip]}
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="flex justify-between mt-4">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={prevTip}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={nextTip}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>
    </motion.div>
  )
}

