import { useEffect, useRef } from 'react';

interface AnimatedTitleProps {
  text: string;
}

const AnimatedTitle = ({ text }: AnimatedTitleProps) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const fragments = [
    { text: 'plasma', moveRange: 20 },
    { text: 'tus ideas', moveRange: 35 },
    { text: 'naturalmente', moveRange: 50 }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const spans = containerRef.current.getElementsByTagName('span');
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      Array.from(spans).forEach((span, index) => {
        const spanRect = span.getBoundingClientRect();
        const spanCenterX = spanRect.left + spanRect.width / 2;
        const spanCenterY = spanRect.top + spanRect.height / 2;

        const deltaX = (clientX - centerX) / centerX;
        const deltaY = (clientY - centerY) / centerY;
        const distance = Math.sqrt(
          Math.pow(spanCenterX - clientX, 2) + Math.pow(spanCenterY - clientY, 2)
        );
        const maxDistance = Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2));
        const intensity = 1 - Math.min(distance / maxDistance, 1);

        const moveRange = fragments[index].moveRange;
        const moveX = deltaX * moveRange * intensity;
        const moveY = deltaY * moveRange * intensity;

        span.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <h1 
      ref={containerRef}
      className="relative text-white font-bold leading-tight flex flex-col gap-4 md:gap-6 max-w-[1200px] w-full"
    >
      {fragments.map((fragment, index) => (
        <span
          key={index}
          className="inline-block transition-transform duration-200 ease-out"
          style={{
            fontSize: index === 0 
              ? 'clamp(2.1rem, 5.75vw, 8.05rem)' 
              : index === 1 
              ? 'clamp(1.89rem, 4.6vw, 5.75rem)'
              : 'clamp(2.31rem, 6.9vw, 10.35rem)',
            marginLeft: index === 0 
              ? '0' 
              : index === 1
              ? 'clamp(1rem, 15%, 15%)' 
              : 'clamp(0.5rem, 5%, 5%)',
            textAlign: 'left'
          }}
        >
          {fragment.text}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedTitle; 