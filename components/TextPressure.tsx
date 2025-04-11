'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { useState } from 'react';

interface TextPressureProps {
  text: string;
  textColor?: string;
  minFontSize?: number;
}

export default function TextPressure({
  text,
  textColor = 'currentColor',
  minFontSize = 24,
}: TextPressureProps) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    });
  };

  const handleTap = () => {
    controls.start({
      scale: 0.95,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }).then(() => {
      if (!isHovered) {
        controls.start({
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
          }
        });
      } else {
        controls.start({
          scale: 1.1,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10
          }
        });
      }
    });
  };

  return (
    <motion.div
      className="relative inline-block cursor-pointer font-bold select-none"
      style={{ 
        fontSize: minFontSize, 
        color: textColor,
        textShadow: isHovered ? '0 0 10px currentColor' : 'none'
      }}
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onTapStart={handleTap}
      onTapCancel={() => handleHoverStart()}
    >
      {text}
    </motion.div>
  );
}