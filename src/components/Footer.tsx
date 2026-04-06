import { Link } from 'react-router-dom';
import { Trophy, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-black border-t border-red-900/30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-red-600 p-2 rounded-lg">
                <Trophy className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                SUPER<span className="text-red-600">11</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Super 11 is the world's leading fantasy sports platform. Experience the thrill of the game like never before.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-600 transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-red-600 transition-colors">Home</Link></li>
              <li><Link to="/features" className="text-gray-400 hover:text-red-600 transition-colors">Features</Link></li>
              <li><Link to="/how-to-play" className="text-gray-400 hover:text-red-600 transition-colors">How to Play</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-red-600 transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/contact" className="text-gray-400 hover:text-red-600 transition-colors">Help Center</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-600 transition-colors">Fair Play Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-red-600" />
                <span>support@super11.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Super 11 Fantasy Sports. All rights reserved.
            <br />
            <span className="mt-2 block">Fantasy sports involves an element of financial risk and may be addictive. Please play responsibly.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
