
import React from 'react';
import Section from './common/Section';
import Button from './common/Button';

const ContactUs: React.FC = () => {
  return (
    <Section 
      id="contact" 
      title="Get In Touch"
      subtitle="We'd love to hear from you. Visit us or drop us a line for reservations and inquiries."
      className="bg-white"
    >
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-6 text-stone-700">
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-2 playfair-display">Visit Our Restaurant</h3>
            <p>123 Himalayan Street, Al Sadd</p>
            <p>Doha, Qatar</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-2 playfair-display">Call Us</h3>
            <p>Reservations: <a href="tel:+97412345678" className="hover:text-amber-600">+974 1234 5678</a></p>
            <p>Inquiries: <a href="tel:+97487654321" className="hover:text-amber-600">+974 8765 4321</a></p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-2 playfair-display">Email Us</h3>
            <p><a href="mailto:info@himalayanaroma.qa" className="hover:text-amber-600">info@himalayanaroma.qa</a></p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-2 playfair-display">Opening Hours</h3>
            <p>Saturday - Thursday: 12:00 PM - 11:00 PM</p>
            <p>Friday: 1:00 PM - 11:30 PM</p>
          </div>
        </div>
        <div className="bg-stone-50 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-stone-800 mb-6 playfair-display">Send us a Message</h3>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700">Full Name</label>
              <input type="text" name="name" id="name" autoComplete="name" className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700">Email</label>
              <input type="email" name="email" id="email" autoComplete="email" className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-stone-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"></textarea>
            </div>
            <div>
              <Button type="submit" variant="primary" className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactUs;
