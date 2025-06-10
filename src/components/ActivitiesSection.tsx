
import { Book, MessageSquare } from 'lucide-react';

const ActivitiesSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-bp-text-gray font-poppins">
          Our Activities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-center w-20 h-20 bg-bp-light-blue rounded-2xl mb-6 mx-auto">
              <Book className="w-10 h-10 text-bp-blue" />
            </div>
            <h3 className="text-2xl font-bold text-bp-text-gray mb-4 text-center font-poppins">
              Educational Events
            </h3>
            <p className="text-bp-text-gray text-center leading-relaxed font-poppins">
              Interactive workshops and seminars designed to educate children, parents, and educators about cyberbullying prevention and digital citizenship.
            </p>
            <div className="mt-6 text-center">
              <button className="bg-bp-blue text-white px-6 py-3 rounded-full font-poppins font-medium hover:bg-blue-600 transition-colors duration-200">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-2xl mb-6 mx-auto">
              <MessageSquare className="w-10 h-10 text-bp-teal" />
            </div>
            <h3 className="text-2xl font-bold text-bp-text-gray mb-4 text-center font-poppins">
              Online Support
            </h3>
            <p className="text-bp-text-gray text-center leading-relaxed font-poppins">
              24/7 online support system connecting victims, families, and communities with trained counselors and peer support networks.
            </p>
            <div className="mt-6 text-center">
              <button className="bg-bp-teal text-white px-6 py-3 rounded-full font-poppins font-medium hover:bg-teal-600 transition-colors duration-200">
                Get Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
