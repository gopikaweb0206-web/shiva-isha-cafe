import { motion } from 'framer-motion'

function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085')",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center bg-black/60 p-10 rounded-3xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Shiva Isha Cafe
        </h1>

        <p className="text-xl mb-6">
          Fresh Coffee • Peaceful Vibes • Delicious Food
        </p>

        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-full text-lg font-semibold">
          Explore Menu
        </button>
      </motion.div>
    </section>
  )
}

export default Hero