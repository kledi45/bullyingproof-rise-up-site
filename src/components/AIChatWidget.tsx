import { useState } from 'react';
import { Shield, MessageSquare, X } from 'lucide-react';
import WelcomeMessage from './WelcomeMessage';

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // This fixed container holds everything and positions it in the bottom-right
    <div className="fixed bottom-14 right-14 z-50">
      
      {/* 
        This is the UI for the CLOSED state (!isOpen).
      */}
      {!isOpen ? (
        <div 
          // --- CHANGE IS HERE ---
          // Changed from flex-col/space-y-2 to flex/space-x-2.
          // This makes the items line up horizontally with a gap.
          // `items-end` now aligns them to the bottom of the row.
          className="flex items-end space-x-2"
        >
          {/* Launcher Element 1: The Welcome Message (now on the left) */}
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <WelcomeMessage />
          </div>

          {/* Launcher Element 2: The circular icon button (now on the right) */}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-bp-blue hover:bg-blue-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <div className="relative">
              <MessageSquare className="w-6 h-6" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </button>
        </div>
      ) : (
      
      /* 
        This is the UI for the OPEN state (isOpen).
      */
        <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-bp-blue text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Shield className="w-8 h-8 text-white" />
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
          <div className="flex-1 p-4 flex flex-col justify-start overflow-y-auto">
            {/* Initial messages inside the chat window */}
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