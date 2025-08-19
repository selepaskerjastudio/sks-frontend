import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Partner {
  id: number;
  name: string;
  image: string;
  bg: string;
}

interface AnimatedPartnersProps {
  items: Partner[];
  className?: string;
}

const AnimatedPartners = ({ items, className = "" }: AnimatedPartnersProps) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );
    
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`flex items-center flex-1 relative ${className}`}>
      {items.map((partner, index) => (
        <div
          key={partner.id}
          className={`w-10 h-10 lg:w-14 lg:h-14 rounded-full ${partner.bg || 'bg-muted'} border-3 border-white flex items-center justify-center transition-all duration-700 ${
            index > 0 ? '-ml-5' : ''
          } ${
            inView 
              ? 'animate-in slide-in-from-left-4 opacity-100' 
              : 'opacity-0 translate-x-[-100px]'
          }`}
          style={{
            backgroundColor: partner.bg.replace('bg-', ''),
            animationDelay: `${index * 200}ms`,
            animationFillMode: 'both',
            animationDuration: '700ms',
            animationTimingFunction: 'ease-out'
          }}
        >
          <Image 
            src={partner.image} 
            alt={partner.name} 
            width={24} 
            height={24} 
          />
        </div>
      ))}
    </div>
  );
};

export default AnimatedPartners; 