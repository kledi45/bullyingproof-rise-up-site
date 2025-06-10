const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-bp-soft-gray to-white py-20 px-6" style={{ background: '#e0e1e3' }}>
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 text-white font-poppins">
        <div className="bg-[#4A90E2] p-4 sm:p-6 md:p-8 rounded-2xl shadow-lg transform scale-90">
  <div className="flex items-center justify-center">
    <div className="w-full text-center">
      <div>For children facing online bullying to feel</div>
      <div>heard 👂, protected 🛡️, and never alone 🤝</div>
    </div>
  </div>
</div>

        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24 mt-16">
          <div className="aspect-square bg-bp-light-blue rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '0s'}}>
            <div className="h-full flex items-center justify-center">
              <div className="text-bp-blue font-poppins font-semibold text-2xl">Coming Soon</div>
            </div>
          </div>
          
          <div className="aspect-square bg-bp-teal rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '0.5s'}}>
            <div className="h-full flex items-center justify-center">
              <div className="text-white font-poppins font-semibold text-2xl">Coming Soon</div>
            </div>
          </div>
          
          <div className="aspect-square bg-bp-yellow rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-float" style={{animationDelay: '1s'}}>
            <div className="h-full flex items-center justify-center">
              <div className="text-bp-text-gray font-poppins font-semibold text-2xl">Coming Soon</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;