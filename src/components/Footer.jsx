import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa"

function Footer() {
  return (
    <footer className="bg-black text-white py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          {/* Cafe Info */}
          <div>
            <h2 className="text-3xl font-bold text-orange-400 mb-4">
              Shiva Isha Cafe
            </h2>

            <p className="text-gray-300">
              Fresh Coffee • Peaceful Vibes • Delicious Food
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-orange-400">Home</a></li>
              <li><a href="#about" className="hover:text-orange-400">About</a></li>
              <li><a href="#menu" className="hover:text-orange-400">Menu</a></li>
              <li><a href="#gallery" className="hover:text-orange-400">Gallery</a></li>
              <li><a href="#contact" className="hover:text-orange-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Follow Us
            </h3>

            <div className="flex gap-6 text-4xl">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:scale-125 transition"
              >
                <FaFacebook />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-500 hover:scale-125 transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:scale-125 transition"
              >
                <FaWhatsapp />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-600 hover:scale-125 transition"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          © 2026 Shiva Isha Cafe. All Rights Reserved.
        </div>

      </div>

    </footer>
  )
}

export default Footer