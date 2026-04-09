import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BrandLogo from './BrandLogo';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isEnabled, setIsEnabled] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorHidden, setCursorHidden] = useState(false);

  useEffect(() => {
    const finePointerQuery = window.matchMedia('(pointer: fine)');

    if (!finePointerQuery.matches) {
      return;
    }

    setIsEnabled(true);
    document.documentElement.classList.add('has-custom-cursor');

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => setCursorHidden(true);
    const handleMouseEnter = () => setCursorHidden(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isEnabled || cursorHidden) return null;

  return (
    <motion.div
      className="fixed left-0 top-0 pointer-events-none z-[9999] h-8 w-8"
      animate={{
        x: mousePosition.x - 16,
        y: mousePosition.y - 16,
        scale: isHovering ? 1.12 : 1,
        opacity: 1,
      }}
      transition={{ type: 'spring', stiffness: 280, damping: 24, mass: 0.18 }}
    >
      <BrandLogo
        className="h-full w-full ring-1 ring-cyan-300/30 shadow-[0_12px_28px_-12px_rgba(45,212,191,0.85)]"
        imageClassName="w-full"
        loading="lazy"
      />
    </motion.div>
  );
}
