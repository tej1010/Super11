import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Get in <span className="text-red-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have questions or need assistance? Our support team is here to help you 24/7.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-zinc-900/50 p-8 rounded-3xl border border-red-900/10 h-full flex flex-col justify-center">
              <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center mb-6">
                <Mail className="text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-gray-400">support@super11.com</p>
              <p className="text-gray-400 text-sm mt-2">Our team typically responds within 24 hours to all inquiries.</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form className="bg-zinc-900/50 p-10 rounded-[2.5rem] border border-red-900/20 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
                <input
                  type="text"
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea
                  rows={6}
                  className="w-full bg-black border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-red-600 focus:ring-1 focus:ring-red-600 outline-none transition-all resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 transition-all transform hover:scale-[1.02]">
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
