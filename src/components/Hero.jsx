import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function Hero() {

  const images = [
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
    
  ]

  const [current, setCurrent] = useState(0)

  useEffect(() => {

    const slider = setInterval(() => {

      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      )

    }, 4000)

    return () => clearInterval(slider)

  }, [])

  return (

    <section
      id="home"
      className="relative h-screen overflow-hidden"
    >

      {/* Background Image Slider */}
      <AnimatePresence>

        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-center"

          style={{
            backgroundImage: `url(${images[current]})`,
          }}

          initial={{
            opacity: 0,
            scale: 1.2,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          exit={{
            opacity: 0,
          }}

          transition={{
            duration: 2,
          }}
        />

      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >

          Welcome To

          <span className="block text-orange-400 mt-4">
            Shiva Isha Cafe
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}

          className="text-lg md:text-2xl text-white max-w-3xl mb-8 leading-8"
        >

          Fresh Coffee • Peaceful Vibes • Delicious Food

        </motion.p>

        {/* Animated Button */}
        <motion.button

          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px orange",
          }}

          whileTap={{
            scale: 0.9,
          }}

          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold"
        >

          Explore Menu

        </motion.button>

      </div>

      {/* Scroll Down Button */}
      <motion.div

        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"

        animate={{
          y: [0, 15, 0],
        }}

        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >

        <a
          href="#about"
          className="text-white text-5xl"
        >
          ↓
        </a>

      </motion.div>

    </section>
  )
}

export default Hero