import { useState, useEffect, useCallback } from 'react';

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateMousePosition = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const updateMouseWhenScroll = useCallback((e: any) => {
    setScrollPosition(window.scrollY);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('scroll', updateMouseWhenScroll);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('scroll', updateMouseWhenScroll);
    };
  }, [updateMouseWhenScroll]);

  return { mousePosition, scrollPosition };
};

export default useMousePosition;
