function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-orange-500">
          Contact Us
        </h2>

        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border p-4 rounded-xl"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border p-4 rounded-xl"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full border p-4 rounded-xl"
          ></textarea>

          <button className="bg-orange-500 text-white px-8 py-3 rounded-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact