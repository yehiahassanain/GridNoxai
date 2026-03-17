import React, { useEffect, useState } from 'react'
import Style from './Contact-US.module.css'

export default function ContactUs() {
    const [Counter,setCounter] = useState(0);
    useEffect(()=>{

    }, []);
  return <>
  <section class="py-20 bg-gray-900">
    <div class="max-w-4xl mx-auto px-4">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-white mb-4">Get in Touch</h2>
        <p class="text-gray-400 text-lg">We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.</p>
      </div>
      <div class="bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12">
        <form>
          <div class="grid grid-cols-1  gap-6 mb-6">
            <div>
              <label for="name" class="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
              <input type="text" id="name" class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Enter Your Name" />
            </div>
          </div>
          <div>
              <label for="email" class="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
              <input type="email" id="email" class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Enter Your Email" />
            </div>
          <div class="mb-6">
            <label for="message" class="block text-gray-300 text-sm font-medium mb-2">Message</label>
            <textarea id="message" rows="7" class="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent" placeholder="Tell us about your project..."></textarea>
          </div>

          <div class="text-center">
            <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </section>
  </>
}


