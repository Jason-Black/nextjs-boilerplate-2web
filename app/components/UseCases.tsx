import Image from 'next/image'

const useCases = [
  {
    title: 'Road Cycling',
    description: 'Power your GPS, lights, and phone while on long rides.',
    image: '/hero-bike.webp'
  },
  {
    title: 'Exercise Bike',
    description: 'Charge your devices while working out at home or in the gym.',
    image: '/hero-bikeindoor.webp?height=300&width=400'
  },
  {
    title: 'Sailing',
    description: 'Keep your navigation equipment and communication devices charged on the water.',
    image: '/sailing.webp?height=300&width=400'
  },
  {
    title: 'Hiking',
    description: 'Stay connected and powered up on long treks through nature.',
    image: '/military.webp?height=300&width=400'
  },
  {
    title: 'Camping',
    description: 'Enjoy modern comforts without sacrificing the outdoor experience.',
    image: '/hero-bad.webp?height=300&width=400'
  },
  {
    title: 'Emergency Preparedness',
    description: 'Be ready for power outages and natural disasters with a reliable power source.',
    image: '/military.webp?height=300&width=400'
  }
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Power Your Adventures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <Image 
                  src={useCase.image} 
                  alt={useCase.title} 
                  width={400} 
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6 transition-colors duration-300 group-hover:bg-green-500">
                <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-white">{useCase.title}</h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-white">{useCase.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

