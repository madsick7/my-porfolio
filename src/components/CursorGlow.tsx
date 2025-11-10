import { useMousePosition } from '../hooks/useMousePosition';
import { motion } from 'framer-motion';

export const CursorGlow = () => {
  const position = useMousePosition();

  return (
    <div className="fixed pointer-events-none z-40">
      <motion.div
        className="w-8 h-8 bg-gold-500/30 rounded-full blur-2xl"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
      <motion.div
        className="w-16 h-16 border border-gold-500/20 rounded-full"
        animate={{
          x: position.x - 32,
          y: position.y - 32,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      />
    </div>
  );
};
