import Image from 'next/image'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Outdoor Enthusiast',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'PowerAnywhere has been a game-changer for my camping trips. I can charge all my devices without worrying about running out of power.'
  },
  {
    name: 'Michael Chen',
    role: 'Freelance Photographer',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'As a photographer always on the go, this handheld generator ensures I never miss a shot due to dead batteries. It\'s a must-have for any professional.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Emergency Response Worker',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'In emergency situations, having a reliable power source is crucial. PowerAnywhere provides that peace of mind and has become an essential part of our kit.'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
            >
              <div className="flex items-center mb-4">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  width={50} 
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

