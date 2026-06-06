import { useState } from "react"
import { Menu, X } from "lucide-react"

function Navbar() {

  const [open, setOpen] = useState(false)

  return (
   <nav className="bg-[burlywood] shadow-lg fixed w-full top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-4">

          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-16 h-16 rounded-full object-cover"
          />

          <h1 className="text-2xl md:text-3xl font-bold text-black">
            Shiva Isha Cafe
          </h1>

        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-semibold text-black">

  <li>
    <a href="#home" className="hover:text-white">
      Home
    </a>
  </li>

  <li>
    <a href="#about" className="hover:text-white">
      About
    </a>
  </li>

  <li>
    <a href="#menu" className="hover:text-white">
      Menu
    </a>
  </li>

  <li>
    <a href="#gallery" className="hover:text-white">
      Gallery
    </a>
  </li>

  <li>
    <a href="#contact" className="hover:text-white">
      Contact
    </a>
  </li>

</ul>
        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (

        <div className="md:hidden bg-[burlywood] px-6 pb-6">

          <ul className="flex flex-col gap-5 text-lg font-semibold text-black">

  <li>
    <a href="#home" onClick={() => setOpen(false)}>
      Home
    </a>
  </li>

  <li>
    <a href="#about" onClick={() => setOpen(false)}>
      About
    </a>
  </li>

  <li>
    <a href="#menu" onClick={() => setOpen(false)}>
      Menu
    </a>
  </li>

  <li>
    <a href="#gallery" onClick={() => setOpen(false)}>
      Gallery
    </a>
  </li>

  <li>
    <a href="#contact" onClick={() => setOpen(false)}>
      Contact
    </a>
  </li>

</ul>



        </div>

      )}

    </nav>
  )
}

export default Navbar