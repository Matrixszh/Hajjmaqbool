import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-white font-bold mb-4">Let's Talk</h4>
            <p className="text-gray-400 text-sm">
              We'd love to hear from you. Call us at
            </p>
            <div className="flex justify-center items-center mt-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 overflow-hidden">
                <img
                  src="/logo.png" // Replace with your logo path
                  alt="Company Logo"
                  className="w-50 h-50 object-contain"
                />
              </div>
              <Link to="/contact">
              <Button className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-6">
                Let's Connect
              </Button>
              </Link>
            </div>
          </div>
          <div>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">f</span>
            </a>
            <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">t</span>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-500 text-sm">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
