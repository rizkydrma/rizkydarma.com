import { useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

const useMouseCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 100, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { cursorXSpring, cursorYSpring };
};

export default useMouseCursor;
