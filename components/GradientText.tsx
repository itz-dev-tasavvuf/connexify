'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface GradientTextProps {
  colors: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function GradientText({
  colors,
  animationSpeed = 3,
  showBorder = false,
  className = '',
  children
}: GradientTextProps) {
  const [gradient, setGradient] = useState('');

  useEffect(() => {
    const gradientString = `linear-gradient(to right, ${colors.join(', ')})`;
    setGradient(gradientString);
  }, [colors]);

  return (
    <motion.span
      className={`relative inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage: gradient,
        backgroundSize: '200% auto',
      }}
      animate={{
        backgroundPosition: ['0%', '200%']
      }}
      transition={{
        duration: animationSpeed,
        repeat: Infinity,
        ease: 'linear'
      }}
    >
      {children}
    </motion.span>
  );
}