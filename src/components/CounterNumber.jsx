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
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  // Start counter when element enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Count up animation
  useEffect(() => {
    if (!hasStarted) return;

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
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, target, duration]);

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