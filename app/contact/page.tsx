'use client'

import Navigation from '@/components/Navigation'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  return (
    <>
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
                Contact Us
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                Get in touch with us today
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <div className="card-minimal">
                {isSubmitted ? (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-semibold text-black mb-2">
                      Thank You!
                    </h2>
                    <p className="text-gray-600">
                      Your message has been sent successfully. We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6 text-center">
                      Send us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="input-minimal"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="input-minimal"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="input-minimal resize-none"
                          placeholder="Tell us about your project or inquiry..."
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="btn-primary w-full"
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-12">
                Get In Touch
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="card-minimal">
                  <h3 className="text-lg font-medium text-black mb-4">
                    Email Us
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Send us an email and we'll respond as soon as possible.
                  </p>
                  <a 
                    href="mailto:contact@example.com"
                    className="text-black font-medium hover:underline"
                  >
                    contact@example.com
                  </a>
                </div>
                
                <div className="card-minimal">
                  <h3 className="text-lg font-medium text-black mb-4">
                    Our Industry
                  </h3>
                  <p className="text-gray-600 mb-2">
                    We specialize in technology solutions.
                  </p>
                  <p className="text-black font-medium">
                    Technology
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