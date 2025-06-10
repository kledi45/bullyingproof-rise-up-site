
const Footer = () => {
  return (
    <footer className="bg-bp-text-gray text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
          <a
            href="#contact"
            className="font-poppins font-medium hover:text-bp-light-blue transition-colors duration-200 text-lg"
          >
            Contact
          </a>
          <a
            href="#volunteer"
            className="font-poppins font-medium hover:text-bp-light-blue transition-colors duration-200 text-lg"
          >
            Join as a Volunteer
          </a>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-600">
          <p className="text-gray-300 font-poppins text-sm">
            © 2024 BullyingProof Initiative. Making the internet a safer place for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
