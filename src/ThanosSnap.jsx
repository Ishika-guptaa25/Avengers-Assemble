import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';

// Pass snapIcon as a prop from App.jsx
const ThanosSnap = ({ contentRef, onSnapComplete, snapIcon }) => {
  const [isSnapping, setIsSnapping] = useState(false);

  const triggerDust = () => {
    const duration = 2000;
    const animationEnd = Date.now() + duration;
    const colors = ['#4a4a4a', '#8b8685', '#2c2c2c', '#615e5e', '#a19d9d'];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 0,
        spread: 45,
        origin: { x: 0, y: Math.random() },
        colors: colors,
        ticks: 200,
        gravity: 0.2,
        scalar: 0.7,
        drift: 2,
      });

      confetti({
        particleCount: 2,
        angle: 0,
        spread: 90,
        origin: { x: 0.5, y: Math.random() },
        colors: colors,
        ticks: 200,
        gravity: 0.1,
        scalar: 0.5,
        drift: 3,
      });

      if (Date.now() < animationEnd) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleSnap = () => {
    setIsSnapping(true);
    triggerDust();

    setTimeout(() => {
      onSnapComplete();
      setIsSnapping(false);
    }, 1200);
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      <motion.button
        whileHover={{ scale: 1.2, rotate: -10 }}
        whileTap={{ scale: 0.8 }}
        onClick={handleSnap}
        className="bg-gradient-to-tr from-yellow-700 to-yellow-400 p-4 rounded-full shadow-[0_0_30px_rgba(234,179,8,0.4)] border-2 border-yellow-200 cursor-pointer group flex items-center justify-center"
      >
        {/* REPLACED EMOJI WITH snap.png */}
        <img
          src={snapIcon}
          alt="Snap"
          className="w-12 h-12 object-contain group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all"
        />
      </motion.button>

      <AnimatePresence>
        {isSnapping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 pointer-events-none bg-white z-[110] mix-blend-screen"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThanosSnap;