import { useState } from 'react'
import './App.css'

type Page = 'home' | 'about' | 'services' | 'contact'

function Navbar({ currentPage, setPage }: { currentPage: Page; setPage: (p: Page) => void }) {
  return (
    <nav className="flex justify-center gap-8 py-4 bg-white text-gray-800 font-medium text-lg border-b border-gray-200">
      <button onClick={() => setPage('home')} className={`hover:text-green-700 transition ${currentPage === 'home' ? 'text-green-700 font-bold' : ''}`}>Home</button>
      <button onClick={() => setPage('about')} className={`hover:text-green-700 transition ${currentPage === 'about' ? 'text-green-700 font-bold' : ''}`}>About</button>
      <button onClick={() => setPage('services')} className={`hover:text-green-700 transition ${currentPage === 'services' ? 'text-green-700 font-bold' : ''}`}>Services</button>
      <button onClick={() => setPage('contact')} className={`hover:text-green-700 transition ${currentPage === 'contact' ? 'text-green-700 font-bold' : ''}`}>Contact</button>
    </nav>
  )
}

function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="bg-[#4a6118] text-white py-4">
      <div className="flex justify-center gap-8 text-lg font-medium">
        <button onClick={() => setPage('home')} className="hover:text-gray-200 transition">Home</button>
        <button onClick={() => setPage('about')} className="hover:text-gray-200 transition">About</button>
        <button onClick={() => setPage('services')} className="hover:text-gray-200 transition">Services</button>
        <button onClick={() => setPage('contact')} className="hover:text-gray-200 transition">Contact</button>
      </div>
    </footer>
  )
}

function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage="home" setPage={setPage} />
      <main className="flex-1">
        {/* Hero Section */}
        <div className="relative">
          <img
            src="/images/hero-fishing.jpg"
            alt="Fishing at sunset silhouette"
            className="w-full h-80 object-cover brightness-75"
            onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/1200x400/f97316/ffffff?text=Fishing+at+Sunset'; }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg text-center">CONOR'S FISHING GUIDE</h1>
            <button
              onClick={() => setPage('contact')}
              className="bg-white text-black font-bold py-3 px-8 text-lg hover:bg-gray-200 transition border-2 border-white"
            >
              BOOK NOW!
            </button>
          </div>
        </div>

        {/* Location Section */}
        <div className="text-center py-8 px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Located In The Hart Of NY</h2>
          <p className="text-gray-600 text-lg">We Jump from lake to lake taking people fishing</p>
        </div>

        {/* Recent Catches Section */}
        <div className="text-center pb-10 px-4">
          <h3 className="text-xl font-semibold mb-6">Most recent catches</h3>
          <div className="flex justify-center gap-4 flex-wrap max-w-3xl mx-auto">
            <img
              src="/images/catch1.jpg"
              alt="Recent fishing catch"
              className="w-48 h-36 object-cover rounded shadow-md"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/300x225/3b82f6/ffffff?text=Fish+Catch'; }}
            />
            <img
              src="/images/catch2.jpg"
              alt="Angler with a big catch"
              className="w-48 h-36 object-cover rounded shadow-md"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/300x225/3b82f6/ffffff?text=Fish+Catch'; }}
            />
            <img
              src="/images/catch3.jpg"
              alt="Proud fisherman showing catch"
              className="w-48 h-36 object-cover rounded shadow-md"
              onError={(e) => { (e.target as HTMLImageElement).src = 'https://placehold.co/300x225/3b82f6/ffffff?text=Fish+Catch'; }}
            />
          </div>
        </div>
      </main>
      <Footer setPage={setPage} />
    </div>
  )
}

function AboutPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-[#3a96b4]">
        <Navbar currentPage="about" setPage={setPage} />
      </div>
      <main className="flex-1 bg-[#3a96b4] text-white px-6 py-10">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">Conor's Story</h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
            <p className="text-lg leading-relaxed">
              Hi, I'm Conor O'Dea a young man that grow up in The Big Apple. I would spend my summers in upstate NY, working at a marina on Lake Gorge. This is where my love for the outdoors and fishing started. I started this company with the hopes to get more people into the outdoors and fishing. I remember how hard it was when I first got into fishing I didn't know where to start. I hope that through this company I can fill this void for People.
            </p>
          </div>
          <div className="text-center">
            <button
              onClick={() => setPage('contact')}
              className="bg-white text-gray-800 font-semibold py-3 px-8 text-lg border-2 border-white hover:bg-gray-100 transition"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </main>
      <Footer setPage={setPage} />
    </div>
  )
}

function ServicesPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage="services" setPage={setPage} />
      <main className="flex-1 px-6 py-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-10">Details</h1>

          {/* Pricing Table */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Cost</h2>
              <div className="space-y-3">
                <p className="text-xl">$300</p>
                <p className="text-xl">$600</p>
                <p className="text-xl">$900</p>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Trip Time</h2>
              <div className="space-y-3">
                <p className="text-xl">Two Hour Trip</p>
                <p className="text-xl">Four Hour Trip</p>
                <p className="text-xl">Six Hour Trip</p>
              </div>
            </div>
          </div>

          {/* Time of Day */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Time Of Day</h2>
            <div className="mb-4">
              <p className="text-xl font-semibold">All Day</p>
              <p className="text-lg text-gray-600">Peak Hours</p>
            </div>
            <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
              <p className="text-lg">sun rise to 12pm</p>
              <p className="text-lg">4pm to sun set</p>
            </div>
          </div>
        </div>
      </main>
      <Footer setPage={setPage} />
    </div>
  )
}

function ContactPage({ setPage }: { setPage: (p: Page) => void }) {
  const [formData, setFormData] = useState({
    lake: '',
    name: '',
    phone: '',
    email: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for reaching out! We will get back to you soon.')
    setFormData({ lake: '', name: '', phone: '', email: '' })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage="contact" setPage={setPage} />
      <main className="flex-1 px-6 py-10">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Connect With Us</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lake you want to fish</label>
              <input
                type="text"
                value={formData.lake}
                onChange={(e) => setFormData({ ...formData, lake: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="text-center pt-2">
              <button
                type="submit"
                className="border-2 border-gray-800 text-gray-800 font-semibold py-2 px-10 hover:bg-gray-800 hover:text-white transition text-lg"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </main>
      <Footer setPage={setPage} />
    </div>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')

  const setPage = (page: Page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  switch (currentPage) {
    case 'home':
      return <HomePage setPage={setPage} />
    case 'about':
      return <AboutPage setPage={setPage} />
    case 'services':
      return <ServicesPage setPage={setPage} />
    case 'contact':
      return <ContactPage setPage={setPage} />
    default:
      return <HomePage setPage={setPage} />
  }
}

export default App
