import React from "react";
import { footer } from "../content/footer";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-brand-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{footer.section1.title}</h3>
            <p className="text-brand-50">{footer.section1.content}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {footer.section2.title}
            </h4>
            <ul className="space-y-2">
              {footer.section2.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className="text-brand-100 hover:text-white"
                  >
                    {" "}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {footer.section3.title}
            </h4>
            <ul className="space-y-2 text-brand-100">
              {footer.section3.contactList.map((contact, index) => (
                <li key={index}>
                  <a
                    target={contact.target}
                    href={contact.link}
                    className="flex items-center space-x-2 text-brand-100 hover:text-white"
                  >
                    {contact.icon}
                    <span>{contact.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {footer.section4.title}
            </h4>
            <div className="flex space-x-4">
              {footer.section4.socialLinks.map((social, index) => (
                <a
                  target={social.target}
                  key={index}
                  href={social.link}
                  className="text-brand-100 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brand-400 text-center text-brand-100">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
