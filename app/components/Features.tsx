import { Battery, Zap, Minimize2, Droplet } from 'lucide-react'

const features = [
  {
    icon: <Battery className="h-8 w-8 text-green-500" />,
    title: 'Long-lasting Power',
    description: 'Generate hours of electricity with our efficient technology.'
  },
  {
    icon: <Zap className="h-8 w-8 text-green-500" />,
    title: 'Universal Compatibility',
    description: 'Attach to virtually any device for instant power.'
  },
  {
    icon: <Minimize2 className="h-8 w-8 text-green-500" />,
    title: 'Compact Design',
    description: 'Small enough to fit in your pocket or bag.'
  },
  {
    icon: <Droplet className="h-8 w-8 text-green-500" />,
    title: 'Weather Resistant',
    description: 'Use in any environment, rain or shine.'
  }
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Choose PowerAnywhere?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <div className="mb-4 inline-block p-3 bg-green-100 rounded-full relative">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

