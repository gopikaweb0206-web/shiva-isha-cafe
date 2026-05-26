function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-orange-400">
          Shiva Isha Cafe
        </h1>

        <ul className="hidden md:flex gap-6 text-lg">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar