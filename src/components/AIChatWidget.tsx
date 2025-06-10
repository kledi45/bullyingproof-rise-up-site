
import { useState } from 'react';
import { Shield, MessageSquare, X } from 'lucide-react';

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-bp-blue hover:bg-blue-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
        >
          <div className="relative">
            <MessageSquare className="w-6 h-6" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </button>
      ) : (
        <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-bp-blue text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Shield className="w-8 h-8 text-white" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <div className="w-3 h-0.5 bg-white rounded-full mt-0.5 mx-auto"></div>
                </div>
              </div>
              <div>
                <h3 className="font-poppins font-semibold">BullyingProof AI</h3>
                <p className="text-xs text-bp-light-blue">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-bp-light-blue transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Content */}
          <div className="flex-1 p-4 flex flex-col justify-center">
            <div className="bg-bp-light-blue rounded-2xl p-4 mb-4 max-w-xs">
              <p className="text-bp-blue font-poppins text-sm">
                Ready to help you, my friend. 😊
              </p>
            </div>
            <div className="bg-bp-light-blue rounded-2xl p-4 max-w-xs">
              <p className="text-bp-blue font-poppins text-sm">
                I'm here to listen and provide support. How can I help you today?
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm font-poppins focus:outline-none focus:ring-2 focus:ring-bp-blue focus:border-transparent"
              />
              <button className="bg-bp-blue text-white rounded-full p-2 hover:bg-blue-600 transition-colors">
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatWidget;
