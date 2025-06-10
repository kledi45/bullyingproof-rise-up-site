import React, { useState, useEffect, useRef } from 'react';

// A small, reusable component for the blinking text to keep the main component clean
const BlinkingText = ({ className }) => (
  <div className={`pointer-events-none ${className}`}>
    <p className="blinking-text rounded-md bg-red-500 px-3 py-1 text-sm font-bold text-white shadow-lg">
      Click me !
    </p>
  </div>
);

const WelcomeMessage = () => {
  // State can be 'hidden', 'top', or 'bottom'
  const [textPosition, setTextPosition] = useState('hidden');

  // Use a ref to keep track of the next position without causing re-renders
  const nextPosRef = useRef('top');

  useEffect(() => {
    // Set up an interval to trigger the effect every 5 seconds
    const intervalId = setInterval(() => {
      // 1. Set the text to be visible at the current target position
      setTextPosition(nextPosRef.current);

      // 2. Set a timeout to hide the text after 2 seconds
      const timeoutId = setTimeout(() => {
        setTextPosition('hidden');
      }, 2000); // Visible for 2 seconds

      // 3. Flip the target position for the *next* 5-second cycle
      nextPosRef.current = nextPosRef.current === 'top' ? 'bottom' : 'top';

      // Cleanup for the timeout if the component unmounts in the middle of the 2s window
      return () => clearTimeout(timeoutId);
    }, 5000); // Cycle repeats every 5 seconds

    // Main cleanup: clear the interval when the component unmounts to prevent memory leaks
    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array [] means this effect runs only once on mount

  return (
    <>
      {/* CSS for the blinking animation */}
      <style>
        {`
          @keyframes blink {
            50% { opacity: 0.2; }
          }
          .blinking-text {
            animation: blink 1.2s linear infinite;
          }
        `}
      </style>

      {/* This outer container needs to be relative for absolute positioning of the text */}
      <div className="relative w-full" style={{ marginBottom: '20px' }}>
        
        {/* Conditionally render the blinking text ABOVE the widget */}
        {textPosition === 'top' && (
          <BlinkingText className="absolute -top-5 left-1/2 -translate-x-1/2" />
        )}
        
        {/* Main container for the original banner */}
        <div className="flex w-full items-center gap-2 rounded-lg p-2">
          {/* Speech Bubble */}
          <div className="relative flex items-center gap-3 rounded-xl bg-[#8ee4ff] px-5 py-3">
            {/* The speech bubble tail */}
            <div className="absolute right-[-6px] top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 bg-[#8ee4ff]"></div>
            
            {/* Text content */}
            <p className="whitespace-nowrap font-bold text-[#343c44]">
              Ready to help you, my friend.
            </p>
          </div>
        </div>

        {/* Conditionally render the blinking text BENEATH the widget */}
        {textPosition === 'bottom' && (
          <BlinkingText className="absolute -bottom-5 left-1/2 -translate-x-1/2" />
        )}

      </div>
    </>
  );
};

export default WelcomeMessage;