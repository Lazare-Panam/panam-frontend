import  { useState, useEffect, useRef } from 'react';

export const Countup = ({ target, duration = 2000 }: { target: string, duration?: number }) => {
  const [count, setCount] = useState(0);
  const targetNum = parseInt(target.replace(/[^0-9]/g, '')); // Extract number
  const suffix = target.replace(/[0-9]/g, ''); // Extract 'k' or '+'
  const countRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHasStarted(true); },
      { threshold: 0.1 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const increment = targetNum / (duration / 16); // 16ms is roughly 1 frame at 60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNum) {
        setCount(targetNum);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, targetNum, duration]);

  return <span ref={countRef}>{count}{suffix}</span>;
};