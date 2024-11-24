import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section id="product" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12 lg:mb-16">
          Our Revolutionary Product
        </h2>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between space-y-12 lg:space-y-0 lg:space-x-16">
          {/* Product Image */}
          <div
            className="lg:w-1/2 flex justify-center animate-fade-in opacity-0 transition-opacity duration-500 ease-in-out"
          >
            <Image
              src="/hero.webp"
              alt="PowerAnywhere Generator in Action"
              width={600} // Larger image
              height={600}
              priority
              className="rounded-lg shadow-lg object-cover mx-auto"
            />
          </div>

          {/* Product Details */}
          <div
            className="lg:w-1/2 animate-fade-in opacity-0 transition-opacity duration-500 ease-in-out delay-300"
          >
            <h3 className="text-3xl font-semibold mb-6 text-gray-800">
              PowerAnywhere Handheld Generator
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="bg-green-500 w-4 h-4 rounded-full flex-shrink-0"></div>
                <p className="text-lg text-gray-600">
                  Generates up to <span className="font-medium">100W of power</span>
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="bg-green-500 w-4 h-4 rounded-full flex-shrink-0"></div>
                <p className="text-lg text-gray-600">
                  Weighs only <span className="font-medium">2 pounds</span>
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="bg-green-500 w-4 h-4 rounded-full flex-shrink-0"></div>
                <p className="text-lg text-gray-600">
                  Charges in just <span className="font-medium">2 hours</span>
                </p>
              </li>
              <li className="flex items-start space-x-4">
                <div className="bg-green-500 w-4 h-4 rounded-full flex-shrink-0"></div>
                <p className="text-lg text-gray-600">
                  Multiple charging ports (<span className="font-medium">USB-C, USB-A, AC outlet</span>)
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
