function Testimonials() {
  return (
    <section className="py-20 bg-orange-100 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-orange-500">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <p>“Amazing coffee and beautiful atmosphere.”</p>
            <h4 className="mt-4 font-bold">Rahul</h4>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <p>“Best cafe experience in town.”</p>
            <h4 className="mt-4 font-bold">Anjali</h4>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <p>“Loved the desserts and cold coffee.”</p>
            <h4 className="mt-4 font-bold">Kiran</h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials