import Navigation from '@/components/Navigation'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                About Us
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Learn more about us
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <div className="card-minimal">
                <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Deploy Test Company is a technology company dedicated to providing quality services to our clients. 
                  We believe in innovation, excellence, and building lasting relationships with those we serve.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our target audience includes anyone interested in our services, and we strive to meet the diverse 
                  needs of our clients with professionalism and expertise.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/services" className="btn-primary">
                    Our Services
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-12">
                Company Information
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="card-minimal">
                  <h3 className="text-lg font-medium text-black mb-2">
                    Industry
                  </h3>
                  <p className="text-gray-600">
                    Technology
                  </p>
                </div>
                <div className="card-minimal">
                  <h3 className="text-lg font-medium text-black mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600">
                    contact@example.com
                  </p>
                </div>
                <div className="card-minimal">
                  <h3 className="text-lg font-medium text-black mb-2">
                    Focus
                  </h3>
                  <p className="text-gray-600">
                    Quality Services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}