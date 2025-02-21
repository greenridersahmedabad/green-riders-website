import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import GRlogo from "../images/logos/green-riders-logo.png";
import { homePage } from "../content/home-page";
import { footer } from "../content/footer";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-brand-500 text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-brand-100 font-bold flex items-center space-x-2"
          >
            <img className="h-16 w-auto" src={GRlogo} alt="image description" />
            <span className="font-bold text-xl">Green Riders</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-brand-100 font-bold hover:text-brand-50 transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-brand-100 font-bold hover:text-brand-50 transition-colors"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-brand-100 font-bold hover:text-brand-50 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/events"
              className="text-brand-100 font-bold hover:text-brand-50 transition-colors"
            >
              Events
            </Link>
            <a href={footer.joinUs.whatsappRedirect.url} target="_blank">
              <button className="bg-white text-brand-300 px-4 py-2 rounded-full font-semibold hover:bg-brand-50 transition-colors">
                Join Us
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md hover:bg-brand-300"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md hover:bg-brand-300"
              >
                About
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 rounded-md hover:bg-brand-300"
              >
                Blog
              </Link>
              <Link
                to="/events"
                className="block px-3 py-2 rounded-md hover:bg-brand-300"
              >
                Events
              </Link>
              <a href={footer.joinUs.whatsappRedirect.url} target="_blank">
              <button className="w-full text-center bg-white text-brand-300 px-4 py-2 rounded-full font-semibold hover:bg-brand-50 transition-colors">
                Join Us
              </button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
