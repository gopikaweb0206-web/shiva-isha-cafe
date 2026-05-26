function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
          alt="Cafe"
          className="rounded-3xl shadow-lg"
        />

        <div>
          <h2 className="text-4xl font-bold mb-4 text-orange-500">
            About Us
          </h2>

          <p className="text-lg text-gray-700 leading-8">
            Shiva Isha Cafe is a peaceful place where coffee lovers enjoy
            premium beverages, delicious snacks, and relaxing ambiance.
            We believe every cup tells a story.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About