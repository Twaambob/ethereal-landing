'use client';

import { useState } from 'react';

export const ContactForm = () => {
  // useState hooks to store the values of the input fields
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    // Prevents the default browser action of reloading the page on submit
    e.preventDefault();
    
    // For now, we'll just log the data to the console to see it work.
    console.log('Form Submitted!', { email, message });
    
    // Optional: Clear the form after submission
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
      <div className="flex flex-col gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            value={email} // The input's value is controlled by our state
            onChange={(e) => setEmail(e.target.value)} // Update state when user types
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={4}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
            value={message} // The textarea's value is controlled by our state
            onChange={(e) => setMessage(e.target.value)} // Update state when user types
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-300 transition-colors"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};