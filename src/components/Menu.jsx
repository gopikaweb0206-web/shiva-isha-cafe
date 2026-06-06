import { motion } from "framer-motion"
import { useRef } from "react"

function Menu() {

  const scrollRef = useRef(null)

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    })
  }

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    })
  }

  const items = [

    {
      name: "Cappuccino",
      image: "/images/cofee.png",
      price: "₹50",
    },

    {
      name: "Cold Coffee",
      image: "/images/cold coffee.png",
      price: "₹100",
    },

    {
      name: "Momos",
      image: "/images/momos.png",
      price: "₹150",
    },

    {
      name: "Burger",
      image: "/images/burgar.png",
      price: "₹250",
    },

    {
      name: "Sandwich",
      image: "/images/sand.png",
      price: "₹170",
    },

    {
      name: "French Fries",
      image: "/images/fries.png",
      price: "₹140",
    },

    {
      name: "Lava Cake",
      image: "/images/sweet.png",
      price: "₹250",
    },

    {
      name: "Tiramisu",
      image: "/images/tiramisu.png",
      price: "₹320",
    },

    {
      name: "Falooda",
      image: "/images/ice cream.png",
      price: "₹190",
    },

  ]

  return (
<section
  id="menu"
  className="py-20 bg-orange-50 overflow-hidden"
>
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.h2

          initial={{ opacity: 0, y: 50 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          className="text-4xl md:text-5xl font-bold text-center text-orange-500 mb-14"
        >

          Our Delicious Menu

        </motion.h2>

        {/* Scroll Buttons */}
        <div className="flex justify-end gap-4 mb-8">

          <button
            onClick={scrollLeft}
            className="bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 rounded-full text-2xl"
          >
            ←
          </button>

          <button
            onClick={scrollRight}
            className="bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 rounded-full text-2xl"
          >
            →
          </button>

        </div>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-4"
        >

          {items.map((item, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                scale: 0.8,
              }}

              whileInView={{
                opacity: 1,
                scale: 1,
              }}

              transition={{
                duration: 0.5,
              }}

              whileHover={{
                scale: 1.05,
                y: -10,
              }}

              className="min-w-[300px] bg-white rounded-3xl shadow-xl overflow-hidden"
            >

              {/* Image */}
              <div className="overflow-hidden">

                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover"

                  whileHover={{
                    scale: 1.1,
                  }}

                  transition={{
                    duration: 0.5,
                  }}
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {item.name}
                </h3>

                <p className="text-orange-500 text-xl font-semibold mb-4">
                  {item.price}
                </p>

                <motion.button

                  whileHover={{
                    scale: 1.05,
                  }}

                  whileTap={{
                    scale: 0.9,
                  }}

                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full w-full"
                >

                  Order Now

                </motion.button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  )
}

export default Menu