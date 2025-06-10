
import { Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-bp-blue text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Shield className="w-10 h-10 text-white" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <div className="w-4 h-1 bg-white rounded-full mt-0.5 mx-auto"></div>
            </div>
          </div>
          <h1 className="text-2xl font-bold font-poppins">BullyingProof</h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-bp-light-blue transition-colors duration-200 font-poppins font-medium">
            About
          </a>
          <a href="#resources" className="hover:text-bp-light-blue transition-colors duration-200 font-poppins font-medium">
            Resources
          </a>
          <a href="#surveys" className="hover:text-bp-light-blue transition-colors duration-200 font-poppins font-medium">
            Surveys
          </a>
          <a href="#contact" className="hover:text-bp-light-blue transition-colors duration-200 font-poppins font-medium">
            Contact
          </a>
        </nav>

        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
