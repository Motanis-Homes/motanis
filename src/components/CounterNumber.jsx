import React, { useState, useEffect, useRef } from 'react';

const CounterNumber = ({
  target = 100,
  duration = 2000,
  suffix = '+',
  prefix = '',
  fontSize = '18px',
  color = '#000',
  fontWeight = 'black',
}) => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef(null);

  // Reset and replay every time element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Reset counter
          setCount(0);
          setIsAnimating(false);
          // Small delay before starting
          setTimeout(() => setIsAnimating(true), 300);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Count up animation
  useEffect(() => {
    if (!isAnimating) return;

    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic — starts fast, slows at end
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
        setIsAnimating(false);
      }
    };

    requestAnimationFrame(animate);
  }, [isAnimating, target, duration]);

  return (
    <p
      ref={ref}
      className={`font-${fontWeight} leading-none`}
      style={{ fontSize, color, margin: 0 }}
    >
      {prefix}{count}{count >= target ? suffix : ''}
    </p>
  );
};

export default CounterNumber;