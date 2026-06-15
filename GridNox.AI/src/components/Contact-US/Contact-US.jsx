import React, { useState } from 'react'
import Style from './Contact-US.module.css'

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(''); // '', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
    
    // Read the Web3Forms key from Vite environment variables
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

    if (accessKey) {
      setStatus('submitting');
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: name,
            email: email,
            message: message,
            subject: `Contact Inquiry from ${name}`
          })
        });

        const data = await response.json();
        if (data.success) {
          setStatus('success');
          setName('');
          setEmail('');
          setMessage('');
        } else {
          setStatus('error');
          setErrorMessage(data.message || "Failed to send message.");
        }
      } catch (err) {
        setStatus('error');
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } else {
      // Fallback: Open the default email client with all form data prefilled
      const subject = encodeURIComponent(`Contact Inquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
      window.location.href = `mailto:MM@GridNox.ai?subject=${subject}&body=${body}`;
    }
  };

  return (
    <>
      <section className="py-20 bg-gray-900 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-gray-400 text-lg">
              We'd love to hear from you. Reach out directly at{' '}
              <a href="mailto:MM@GridNox.ai" className="text-red-500 hover:text-red-400 transition-colors font-semibold underline">
                MM@GridNox.ai
              </a>{' '}
              or use the form below.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Details Card */}
            <div className="bg-gray-800 rounded-3xl p-8 flex flex-col justify-between border border-gray-700 shadow-2xl">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Whether you have a question about our AI services, pricing, or anything else, our team is ready to answer all your questions.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-500/10 p-3 rounded-lg text-red-500">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email Us</h4>
                      <a href="mailto:MM@GridNox.ai" className="text-gray-400 hover:text-white transition-colors">
                        MM@GridNox.ai
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <span className="text-xs text-gray-500 uppercase tracking-wider">Company</span>
                <p className="text-white font-semibold mt-1">GridNox.Ai</p>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 lg:col-span-2 border border-gray-700">
              {status === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500 text-green-400 rounded-lg text-center">
                  Message sent successfully! We will get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500 text-red-400 rounded-lg text-center">
                  {errorMessage}
                </div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors" 
                      placeholder="Enter Your Name" 
                    />
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors" 
                    placeholder="Enter Your Email" 
                  />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="7" 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-colors" 
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div className="text-center md:text-left">
                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full md:w-auto bg-red-500 hover:bg-red-600 disabled:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg shadow-red-500/20"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}


