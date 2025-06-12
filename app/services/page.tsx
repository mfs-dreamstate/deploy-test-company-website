import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Services() {
  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                We provide quality services to meet your needs
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="card-minimal text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
                  Our Services
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We provide quality services
                </p>
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-medium text-black mb-3">
                      Professional Solutions
                    </h3>
                    <p className="text-gray-600">
                      Our team delivers professional solutions tailored to your specific requirements.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-medium text-black mb-3">
                      Technology Expertise
                    </h3>
                    <p className="text-gray-600">
                      With our background in technology, we bring innovative approaches to every project.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-medium text-black mb-3">
                      Quality Assurance
                    </h3>
                    <p className="text-gray-600">
                      We maintain the highest standards of quality in everything we do.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="section-padding bg-black text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Contact us today to learn more about how we can help you with our quality services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="inline-block px-8 py-3 bg-white text-black rounded-lg font-medium transition-all duration-200 hover:bg-gray-100">
                  Contact Us
                </Link>
                <Link href="/about" className="inline-block px-8 py-3 bg-transparent text-white border border-white rounded-lg font-medium transition-all duration-200 hover:bg-white hover:text-black">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}