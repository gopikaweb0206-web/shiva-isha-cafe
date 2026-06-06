import { motion } from "framer-motion"
import { FaHtml5 } from "react-icons/fa"

function About() {

  return (

    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-white to-orange-50 overflow-hidden"
    >

      <div className="max-w-7xl mx-auto">

        {/* Main About Section */}
        <motion.div

          className="grid md:grid-cols-2 gap-16 items-center"

          initial={{ opacity: 0, y: 100 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          viewport={{ once: true }}
        >

          {/* Left Image */}
          <motion.div

            whileHover={{
              scale: 1.03,
            }}

            transition={{
              duration: 0.5,
            }}

            className="relative"
          >

            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
              alt="Cafe"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />

            {/* Floating Badge */}
            <motion.div

              animate={{
                y: [0, -10, 0],
              }}

              transition={{
                duration: 2,
                repeat: Infinity,
              }}

              className="absolute bottom-6 left-6 bg-orange-500 text-white px-6 py-4 rounded-2xl shadow-xl"
            >

              <h3 className="text-2xl font-bold">
                A corner of calm in a world that nerver
              </h3>

             <p> you have best experience</p>

            </motion.div>

          </motion.div>

          {/* Right Content */}
          <motion.div

            initial={{ opacity: 0, x: 100 }}

            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

            viewport={{ once: true }}
          >

            <h2 className="text-4xl md:text-6xl font-bold text-orange-500 mb-8 leading-tight">

              About Shiva Isha Cafe

            </h2>

            <p className="text-lg text-gray-700 leading-9 mb-6">

              Shiva Isha Cafe is a peaceful destination where coffee lovers
              experience premium beverages, delicious desserts, and a relaxing atmosphere.

            </p>

            <p className="text-lg text-gray-700 leading-9 mb-6">

              Our cafe combines warm hospitality, aesthetic interiors,
              and handcrafted coffee to create unforgettable moments
              for every customer.

            </p>

            <p className="text-lg text-gray-700 leading-9 mb-10">

              Whether you're meeting friends, working peacefully,
              or enjoying quality food, Shiva Isha Cafe welcomes you
              with comfort and positive vibes.

            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-6">

              <motion.div

                whileHover={{
                  y: -10,
                }}

                className="bg-white p-6 rounded-3xl shadow-lg"
              >

                <h3 className="text-2xl font-bold text-orange-500 mb-3">
                  Premium Coffee
                </h3>

                <p className="text-gray-600">
                  Freshly brewed coffee made with quality beans.
                </p>

              </motion.div>

              <motion.div

                whileHover={{
                  y: -10,
                }}

                className="bg-white p-6 rounded-3xl shadow-lg"
              >

                <h3 className="text-2xl font-bold text-orange-500 mb-3">
                  Peaceful Ambience
                </h3>

                <p className="text-gray-600">
                  Comfortable seating and relaxing atmosphere.
                </p>

              </motion.div>

            </div>

          </motion.div>

        </motion.div>

        {/* Statistics Section */}
        <motion.div

          initial={{ opacity: 0, y: 100 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          viewport={{ once: true }}

          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24"
        >

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

            <h5 className="text-5xl font-bold text-orange-500 mb-3">
             Best
            </h5>

            <p className="text-gray-700 text-lg">
              Experience
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

            <h3 className="text-5xl font-bold text-orange-500 mb-3">
              5K+
            </h3>

            <p className="text-gray-700 text-lg">
              Happy Customers
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

            <h3 className="text-5xl font-bold text-orange-500 mb-3">
              50+
            </h3>

            <p className="text-gray-700 text-lg">
              Menu Items
            </p>

          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">

            <h3 className="text-5xl font-bold text-orange-500 mb-3">
              100%
            </h3>

            <p className="text-gray-700 text-lg">
              Fresh Ingredients
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  )
}

export default About