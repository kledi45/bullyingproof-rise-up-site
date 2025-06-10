
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-bp-soft-gray to-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold text-bp-text-gray font-poppins mb-16 animate-fade-in leading-tight">
          Helping kids rise above cyberbullying
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="h-40 bg-bp-light-blue rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '0s'}}>
            <div className="h-full flex items-center justify-center">
              <div className="text-bp-blue font-poppins font-semibold text-lg">Coming Soon</div>
            </div>
          </div>
          
          <div className="h-40 bg-bp-teal rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '0.5s'}}>
            <div className="h-full flex items-center justify-center">
              <div className="text-white font-poppins font-semibold text-lg">Coming Soon</div>
            </div>
          </div>
          
          <div className="h-40 bg-bp-yellow rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '1s'}}>
            <div className="h-full flex items-center justify-center">
              <div className="text-bp-text-gray font-poppins font-semibold text-lg">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
