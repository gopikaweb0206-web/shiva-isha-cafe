const images = [
  'https://images.unsplash.com/photo-1511920170033-f8396924c348',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
  'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
]

function Gallery() {
  return (
    <section id="gallery" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-500">
          Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Cafe"
              className="rounded-3xl shadow-lg h-72 w-full object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery