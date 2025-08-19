import { useEffect, useRef } from "react";

interface ScrollAnimatedProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
}

const ScrollAnimated = ({ 
  children, 
  className = "", 
  animationClass = "animate-in slide-in-from-top-8 fade-in duration-500" 
}: ScrollAnimatedProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reset animation by removing and re-adding the element
          const element = entry.target as HTMLElement;
          element.style.animation = 'none';
          element.offsetHeight; // Trigger reflow
          element.style.animation = '';
          
          // Add animation class
          element.classList.add(...animationClass.split(' '));
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animationClass]);

  return (
    <div 
      ref={ref} 
      className={`${className} ${animationClass}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimated; 