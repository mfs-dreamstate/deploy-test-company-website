import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <main className="pt-20">
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                Deploy Test Company
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                Welcome to our website
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="btn-primary">
                  Our Services
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
                About Us
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Learn more about us
              </p>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-black mb-12">
                Our Services
              </h2>
              <div className="card-minimal max-w-md mx-auto">
                <h3 className="text-xl font-medium text-black mb-4">
                  Our Services
                </h3>
                <p className="text-gray-600 mb-6">
                  We provide quality services
                </p>
                <Link href="/services" className="btn-primary">
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="section-padding bg-black text-white">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold mb-6">
                Get In Touch
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Ready to work with us? Contact us today to get started.
              </p>
              <Link href="/contact" className="inline-block px-8 py-3 bg-white text-black rounded-lg font-medium transition-all duration-200 hover:bg-gray-100">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}