export default function CTA() {
  return (
    <section id="cta" className="py-20 bg-green-500">
      <div className="container mx-auto px-4 text-center">
        <h2 
          className="text-3xl md:text-4xl font-bold text-white mb-6 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Ready to Power Your Life?
        </h2>
        <p 
          className="text-xl text-white mb-8 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Get your PowerAnywhere generator today and never worry about running out of power again.
        </p>
        <a 
          href="#" 
          className="inline-block bg-white text-green-500 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition duration-300"
        >
          Order Now
        </a>
      </div>
    </section>
  )
}

