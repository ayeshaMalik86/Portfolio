import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const serviceId = 'service_l9xv9ei';
      const templateId = 'template_aihu5ev'; 
      const publicKey = 'PYlOPB-if1Fg3fxfV'; 


      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'ayeshaamalik734@gmail.com', 
        },
        publicKey
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);

    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  return (
    <div className="font-mona p-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-6xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. 
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-600 hover:text-black transition-colors">
                <FaEnvelope className="w-5 h-5" />
                <span 
                  className="cursor-pointer hover:underline"
                  onClick={() => copyToClipboard('ayesha.malik@example.com')}
                >
                  ayeshaamalik734@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <FaMapMarkerAlt className="w-5 h-5" />
                <span>Islamabad, Pakistan</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Connect with me</h4>
            <div className="flex space-x-4 text-2xl">
              <a 
                href="https://github.com/ayeshaMalik86" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/ayesha-malik-0bb7a727a/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-lg font-semibold mb-2">Response Time</h4>
            <p className="text-gray-600 text-sm">
              I typically respond to emails within 24 hours. For urgent matters, 
              feel free to reach out via LinkedIn.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Send me a message</h3>
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <div className="text-green-600 text-4xl mb-4">✓</div>
              <h4 className="text-lg font-semibold text-green-800 mb-2">Message Sent!</h4>
              <p className="text-green-600">Thank you for reaching out. I'll get back to you soon!</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center mb-6">
              <div className="text-red-600 text-4xl mb-4">⚠</div>
              <h4 className="text-lg font-semibold text-red-800 mb-2">Error</h4>
              <p className="text-red-600">{error}</p>
              <button 
                onClick={() => setError('')}
                className="mt-4 text-red-600 hover:text-red-800 underline"
              >
                Try again
              </button>
            </div>
          ) : (
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-none"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-none"
                  placeholder="What's this about?"
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
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-none resize-none"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full border border-gray-500 text-gray-500 py-3 px-6 rounded-lg font-semibold hover:scale-105 transition-transform hover:shadow-xl flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-500"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
