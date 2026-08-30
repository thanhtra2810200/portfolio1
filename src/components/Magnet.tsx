import { useRef, useState, type ReactNode } from 'react';

type MagnetProps = {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
};

export default function Magnet({
  children,
  padding = 100,
  strength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className,
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0)');
  const [transition, setTransition] = useState(inactiveTransition);

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    if (
      Math.abs(distX) < rect.width / 2 + padding &&
      Math.abs(distY) < rect.height / 2 + padding
    ) {
      setTransition(activeTransition);
      setTransform(
        `translate3d(${distX / strength}px, ${distY / strength}px, 0)`,
      );
    } else {
      setTransition(inactiveTransition);
      setTransform('translate3d(0px, 0px, 0)');
    }
  };

  const handleMouseLeave = () => {
    setTransition(inactiveTransition);
    setTransform('translate3d(0px, 0px, 0)');
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition, willChange: 'transform' }}
      className={className}
    >
      {children}
    </div>
  );
}
