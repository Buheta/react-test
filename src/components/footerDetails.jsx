import {
    FaInstagram,
    FaXTwitter,
    FaFacebookF,
  } from "react-icons/fa6";
  
  export default function FooterDetails() {
    return (
      <footer className="bg-gray-700 text-gray-100 py-16 px-6 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Middle & Upper School */}
          <div>
            <h3 className="text-lg font-bold text-white uppercase mb-3">Contact Us</h3>
             <p className="mb-1">Address: Musanze, Rwanda</p>
            <p className="mb-1">Phone: <a href="tel:+250788478469" className="hover:underline">+250-788-478469,<br></br>+250-788-76880, +250-782-406217</a></p>
            <p className="mb-1">P.O. Box: P.O. BOX 05, MUSANZE RWANDA</p>
            <p className="mb-1">Web: <a href="https://www.wisdomschoolrwanda.com/" >wisdomschoolrwanda.com</a></p>
          </div>

           {/* Social Media */}
            <div className="text-center lg:text-left">
            <h3 className="text-lg font-bold text-white uppercase mb-3">Connect With Us</h3>
            <p className="mb-4">Follow us on social media for the latest updates.</p>
            <div className="flex justify-center lg:justify-start items-center space-x-4 text-xl">
              <a
                href="https://www.instagram.com/wisdomschoolsrw/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com/wisdomschoolrwa?s=11&t=nNuS4yTbDD3MOlAfIbhzFw"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaXTwitter />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
  
          {/* Map */}
          <div>
            <h3 className="text-lg font-bold text-white uppercase mb-3">Our Location</h3>
            <div className="rounded-md overflow-hidden shadow-lg">
              <iframe
                title="School Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.042942843313!2d30.064436194641257!3d-1.4997419337160454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dbf589c307d69b%3A0x95780d5422c6455e!2sMusanze%2C%20Rwanda!5e0!3m2!1sen!2srw!4v1695405742456!5m2!1sen!2srw"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  