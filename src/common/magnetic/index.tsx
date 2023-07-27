import { gsap } from 'gsap';
import { cloneElement, useEffect, useRef } from 'react';

type MagneticProps = {
  children: any;
};

export default function Magnetic({ children }: MagneticProps) {
  const magnetic = useRef<any>(null);

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
    const yTo = gsap.quickTo(magnetic.current, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

    if (magnetic.current) {
      magnetic.current.addEventListener('mousemove', (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = magnetic.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.35);
        yTo(y * 0.35);
      });

      magnetic.current.addEventListener('mouseleave', (e: MouseEvent) => {
        xTo(0);
        yTo(0);
      });
    }
  }, []);

  return cloneElement(children, { ref: magnetic });
}
