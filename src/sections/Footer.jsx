import React from "react";
import { Droplet, Instagram, Facebook, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg">
                <Droplet className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">PureDoodhwala</h3>
            </div>

            <p className="text-gray-400 text-sm mb-6">
              Delivering pure, farm-fresh milk directly to your doorstep.
            </p>

            <div className="flex space-x-4">
              <a className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
              <a className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a className="w-8 h-8 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li>Home</li>
              <li>Our Story</li>
              <li>Quality Check</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Refund Policy</li>
            </ul>
          </div>

          {/* App Download */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get the App</h4>

            <button className="w-full bg-gray-800 border border-gray-700 p-3 rounded-lg hover:bg-gray-700">
              <span className="text-sm font-semibold">
                Get it on Google Play
              </span>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-gray-400 flex justify-between">
          <p>© 2024 Pure Doodhwala App. All rights reserved.</p>
          <p>Designed with ❤️ for Health</p>
        </div>
      </div>
    </footer>
  );
};
