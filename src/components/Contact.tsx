// src/components/Contact.tsx (Updated with Custom Dialogue Box)
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, X } from 'lucide-react'; // Added X icon

// Define the Dialog Box Component
const DialogBox = ({ isOpen, onClose, message }: { isOpen: boolean, onClose: () => void, message: string }) => {
    if (!isOpen) return null;

    return (
        // Overlay background
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            {/* Modal content card */}
            <div className="bg-gray-800 p-6 rounded-lg shadow-2xl max-w-sm w-full border border-cyan-600">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-semibold text-white">Status Update</h3>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <p className="text-gray-300 mb-6">{message}</p>
                <button 
                    onClick={onClose} 
                    className="w-full bg-cyan-600 text-gray-900 py-2 px-4 rounded-md hover:bg-cyan-500 transition duration-300 font-semibold"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

// Main Contact Component
function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isDialogOpen, setIsDialogOpen] = useState(false); // State for the dialogue box

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Instead of the previous alert, show our custom dialogue box
    // console.log('Form submitted:', formData); 
    setIsDialogOpen(true);
    // Note: We don't reset form data here immediately; maybe after the user closes the dialog.
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    // Optionally reset form fields here after user acknowledges
    // setFormData({ name: '', email: '', message: '' });
  };

  const dialogMessage = "Oops sorry, this is still under construction. Please feel free to reach me out in my email or LinkedIn.";

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 bg-gray-900 dark:bg-black p-8 transition-colors duration-300 mt-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white">Contact Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Column 1: Contact Form */}
          <div className="bg-gray-800 dark:bg-gray-900 p-6 rounded-lg shadow-md transition-colors duration-300 border border-gray-700">
            <h3 className="text-xl font-semibold mb-4 text-white">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                       className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md focus:ring-cyan-500 focus:border-cyan-500 bg-gray-700 text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                       className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md focus:ring-cyan-500 focus:border-cyan-500 bg-gray-700 text-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400">Message</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} required
                          className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md focus:ring-cyan-500 focus:border-cyan-500 bg-gray-700 text-white"></textarea>
              </div>
              <button type="submit" 
                      className="w-full bg-cyan-600 text-gray-900 py-2 px-4 rounded-md hover:bg-cyan-500 transition duration-300 font-semibold">
                Send Message
              </button>
            </form>
          </div>

          {/* Column 2: Contact Information & Social Links */}
          <div className="flex flex-col space-y-4"> 
            
            <div className="space-y-4">
                {/* Email Card */}
                <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700 flex items-center space-x-4">
                    <div className="p-3 bg-gray-700 rounded-lg text-cyan-400">
                        <Mail className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-400">Email</p>
                        <a href="mailto:rgerero@gmail.com" className="text-white hover:text-cyan-400 font-semibold">rgerero@gmail.com</a>
                    </div>
                </div>

                {/* Phone Card */}
                <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700 flex items-center space-x-4">
                    <div className="p-3 bg-gray-700 rounded-lg text-cyan-400">
                        <Phone className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-400">Phone</p>
                        <p className="text-white font-semibold">+65 985-12576</p>
                    </div>
                </div>

                {/* Location Card */}
                <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700 flex items-center space-x-4">
                    <div className="p-3 bg-gray-700 rounded-lg text-cyan-400">
                        <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-400">Location</p>
                        <p className="text-white font-semibold">Remote / Available Worldwide</p>
                    </div>
                </div>
            </div>

            {/* Connect With Me (Social Links) Card */}
            <div className="bg-gray-800 dark:bg-gray-900 p-4 rounded-lg shadow-md border border-gray-700 mt-4"> 
                <h3 className="text-xl font-semibold mb-4 text-white">Connect with me</h3>
                <div className="flex space-x-4">
                    <a href="https://github.com/rgerero" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-600 transition duration-300">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/alfred-ryan-gerero-20532b58/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-700 rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-gray-600 transition duration-300">
                        <Linkedin className="w-6 h-6" />
                    </a>
                </div>
            </div>

          </div>
          
        </div>
      </div>

      {/* Render the Dialogue Box here */}
      <DialogBox isOpen={isDialogOpen} onClose={handleCloseDialog} message={dialogMessage} />
    </section>
  );
}

export default Contact;
