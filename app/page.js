import Header from "./components/Header"
import SOS from "./components/SOS"
import LocationSharing from "./components/LocationSharing"
import EmergencyContacts from "./components/EmergencyContacts"
import FakeCall from "./components/FakeCall"
import SafetyTips from "./components/SafetyTips"

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <SOS />
        <LocationSharing />
        <FakeCall />
        <EmergencyContacts />
        <SafetyTips />
      </div>
    </div>
  )
}

