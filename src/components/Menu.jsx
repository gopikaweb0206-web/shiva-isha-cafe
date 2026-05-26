const items = [
  {
    name: 'Cappuccino',
    price: '₹180',
  },
  {
    name: 'Cold Coffee',
    price: '₹150',
  },
  {
    name: 'Veg Sandwich',
    price: '₹120',
  },
  {
    name: 'Chocolate Cake',
    price: '₹200',
  },
]

function Menu() {
  return (
    <section id="menu" className="py-20 bg-orange-50 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">
          Our Menu
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg text-center"
            >
              <h3 className="text-2xl font-semibold mb-2">
                {item.name}
              </h3>

              <p className="text-orange-500 text-xl">
                {item.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu