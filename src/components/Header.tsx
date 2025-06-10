const Header = () => {
  return (
    <header className="bg-bp-blue text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              src="/images/logo.png"
              alt="BullyingProof Logo"
              className="w-20 h-20 object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold font-poppins">BullyingProof - Community</h1>
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
