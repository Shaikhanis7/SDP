import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary  text-gray-300 py-10">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Description */}
          <div className="w-full sm:w-1/3 text-center sm:text-left mb-6 sm:mb-0">
            <a href="/" className="text-3xl font-bold text-primary-foreground">
              JobIn
            </a>
            <p className="mt-4 text-primary-foreground">
              Connecting talent with opportunity. Your next career move starts here.
            </p>
          </div>

          {/* Navigation Links */}
          {/* <div className="w-full sm:w-1/3 text-center mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-white">Home</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/jobs" className="hover:text-white">Jobs</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div> */}

          {/* Social Media Links */}
          <div className="w-full sm:w-1/3 text-center sm:text-right">
            <h3 className="text-lg font-semibold text-primary-foreground mb-4">Follow Us</h3>
            <div className="flex justify-center sm:justify-end space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-white">
                <FaFacebookF size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-white">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t text-primary-foreground pt-6 text-center">
          <p className="text-primary-foreground">© 2024 JobFinder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
