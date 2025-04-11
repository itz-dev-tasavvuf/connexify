'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';

interface TiltedCardProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  containerHeight?: string;
  containerWidth?: string;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  showTooltip?: boolean;
  displayOverlayContent?: boolean;
  overlayContent?: React.ReactNode;
}

export default function TiltedCard({
  icon,
  title,
  description,
  containerHeight = '300px',
  containerWidth = '300px',
  rotateAmplitude = 12,
  scaleOnHover = 1.2,
  showTooltip = false,
  displayOverlayContent = false,
  overlayContent
}: TiltedCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [rotateAmplitude, -rotateAmplitude]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [-rotateAmplitude, rotateAmplitude]
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      style={{
        height: containerHeight,
        width: containerWidth,
        position: 'relative',
        transformStyle: 'preserve-3d',
        rotateX,
        rotateY,
      }}
      whileHover={{ scale: scaleOnHover }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
      className="relative rounded-xl bg-transparent shadow-lg transition-all duration-200"
    >
      <div className="absolute inset-0 bg-white/5 dark:bg-white/10 backdrop-blur-sm rounded-xl transition-opacity duration-200" />
      <div className="relative p-6 z-10">
        {icon && <div className="mb-4">{icon}</div>}
        {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>

      {displayOverlayContent && (
        <motion.div
          className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-xl flex items-center justify-center text-white p-6 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {overlayContent}
        </motion.div>
      )}
    </motion.div>
  );
}