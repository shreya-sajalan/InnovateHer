"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Phone } from "lucide-react"

export default function FakeCall() {
  const [isCallActive, setIsCallActive] = useState(false)

  const toggleFakeCall = () => {
    setIsCallActive(!isCallActive)
    if (!isCallActive) {
      // Implement fake call functionality here
      setTimeout(() => {
        alert("Incoming call from Mom")
        setIsCallActive(false)
      }, 3000)
    }
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Fake Call</h2>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={toggleFakeCall}
        className={`${
          isCallActive ? "bg-gradient-to-r from-red-400 to-red-500" : "bg-gradient-to-r from-green-400 to-green-500"
        } text-white px-6 py-3 rounded-full flex items-center justify-center w-full font-semibold shadow-md hover:shadow-lg transition-all duration-200`}
      >
        <Phone className="mr-2" />
        {isCallActive ? "Cancel Fake Call" : "Trigger Fake Call"}
      </motion.button>
    </motion.div>
  )
}

