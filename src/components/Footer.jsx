import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-richblack-900 text-richblack-400 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        
        {/* Company Overview */}
        <div>
          <h3 className="text-xl font-bold text-green-400 mb-4">TradeVision</h3>
          <p className="text-sm mb-4">
            TradeVision provides AI-driven stock market predictions and insights, helping investors make smarter, data-backed decisions. Join us to stay ahead in the trading game.
          </p>
          <p className="text-sm">&copy; 2024 TradeVision. All Rights Reserved.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="#insights" className="hover:text-green-300">Market Insights</a></li>
            <li><a href="#tech" className="hover:text-green-300">Our Technology</a></li>
            <li><a href="#community" className="hover:text-green-300">Community</a></li>
            <li><a href="#subscribe" className="hover:text-green-300">Subscribe</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
          <p className="text-sm">1234 Wall Street, New York, NY 10005</p>
          <p className="text-sm mt-2">Email: <a href="mailto:support@tradevision.com" className="hover:text-green-300">support@tradevision.com</a></p>
          <p className="text-sm mt-2">Phone: <a href="tel:+1234567890" className="hover:text-green-300">+1 (234) 567-890</a></p>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-green-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.569a10 10 0 01-2.825.775 4.945 4.945 0 002.163-2.724 10.165 10.165 0 01-3.127 1.194 4.924 4.924 0 00-8.389 4.482c-4.086-.2-7.702-2.17-10.126-5.164A4.822 4.822 0 001.67 6.149 4.913 4.913 0 003.4 12.66a4.92 4.92 0 01-2.224-.616v.061a4.922 4.922 0 003.946 4.827 4.936 4.936 0 01-2.21.085 4.924 4.924 0 004.604 3.419A9.868 9.868 0 010 19.54a13.914 13.914 0 007.548 2.213c9.056 0 14.01-7.5 14.01-14.006 0-.213-.004-.426-.013-.637A9.935 9.935 0 0024 4.59z" /></svg>
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-green-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.692v-3.622h3.129V8.413c0-3.1 1.893-4.787 4.658-4.787 1.325 0 2.464.098 2.795.142v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.622h-3.123V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z" /></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-green-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zm-13.846 20.452H5.35V9.12h3.033v11.332zm-1.52-12.925c-.974 0-1.77-.81-1.77-1.787 0-.977.796-1.787 1.77-1.787.975 0 1.77.81 1.77 1.787 0 .977-.796 1.787-1.77 1.787zm14.282 12.925h-3.034v-5.568c0-1.333-.027-3.047-1.854-3.047-1.856 0-2.14 1.447-2.14 2.942v5.673h-3.034V9.12h2.915v1.549h.042c.41-.778 1.413-1.596 2.91-1.596 3.107 0 3.679 2.047 3.679 4.707v6.671h-.001z" /></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        <p>Privacy Policy | Terms of Service</p>
      </div>
    </footer>
  );
};

export default Footer;
