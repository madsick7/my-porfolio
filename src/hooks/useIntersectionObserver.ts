import { useEffect, useRef, useState } from 'react';

interface IntersectionOptions {
  threshold?: number | number[];
  margin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (options: IntersectionOptions = {}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.triggerOnce) {
          setHasTriggered(true);
        }
      } else {
        if (!options.triggerOnce) {
          setIsVisible(false);
        }
      }
    }, {
      threshold: options.threshold || 0.1,
      rootMargin: options.margin || '0px',
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options.threshold, options.margin, options.triggerOnce]);

  const shouldAnimate = options.triggerOnce ? hasTriggered : isVisible;

  return { ref, isVisible: shouldAnimate };
};
