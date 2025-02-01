"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, Plus, X } from "lucide-react"

export default function EmergencyContacts() {
  const [contacts, setContacts] = useState([])
  const [newContact, setNewContact] = useState("")

  const addContact = (e) => {
    e.preventDefault()
    if (newContact) {
      setContacts([...contacts, newContact])
      setNewContact("")
    }
  }

  const removeContact = (index) => {
    setContacts(contacts.filter((_, i) => i !== index))
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-2xl shadow-lg border border-purple-100">
      <h2 className="text-2xl font-bold mb-4 text-purple-800">Emergency Contacts</h2>
      <form onSubmit={addContact} className="flex mb-4">
        <input
          type="tel"
          value={newContact}
          onChange={(e) => setNewContact(e.target.value)}
          placeholder="Enter contact number"
          className="flex-grow px-4 py-2 border border-purple-200 rounded-l-full text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-r-full flex items-center justify-center transition-all duration-200 hover:shadow-md"
        >
          <Plus className="w-5 h-5" />
        </motion.button>
      </form>
      <AnimatePresence>
        {contacts.length > 0 ? (
          <motion.ul className="space-y-2">
            {contacts.map((contact, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex justify-between items-center bg-purple-50 px-4 py-3 rounded-lg border border-purple-100"
              >
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-500" />
                  <span className="text-gray-800 font-medium">{contact}</span>
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => removeContact(index)}
                  className="text-red-500 hover:text-red-600 p-1 rounded-full hover:bg-red-50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-gray-500 py-4"
          >
            No emergency contacts added yet
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

