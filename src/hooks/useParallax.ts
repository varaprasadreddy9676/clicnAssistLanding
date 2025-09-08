import { useEffect, useRef, useState, useCallback } from 'react';

interface ParallaxOptions {
  speed?: number;
  direction?: 'vertical' | 'horizontal' | 'both';
  offset?: number;
  mouseParallax?: boolean;
  mouseStrength?: number;
  scrollParallax?: boolean;
  scrollSpeed?: number;
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const {
    speed = 0.5,
    direction = 'vertical',
    offset = 0,
    mouseParallax = false,
    mouseStrength = 0.1,
    scrollParallax = true,
    scrollSpeed = 0.1
  } = options;

  const elementRef = useRef<HTMLElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // Handle mouse movement for mouse parallax
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!mouseParallax) return;
    
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    setMousePosition({
      x: (e.clientX - centerX) / centerX,
      y: (e.clientY - centerY) / centerY
    });
  }, [mouseParallax]);

  // Handle scroll for scroll parallax
  const handleScroll = useCallback(() => {
    if (!scrollParallax) return;
    
    const scrollY = window.scrollY;
    setScrollPosition(scrollY);
    
    // Check if element is in viewport
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;
      setIsVisible(isInView);
    }
  }, [scrollParallax]);

  // Apply transforms
  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    let transform = '';

    // Mouse parallax effect
    if (mouseParallax && isVisible) {
      const mouseX = mousePosition.x * mouseStrength * 50;
      const mouseY = mousePosition.y * mouseStrength * 50;
      
      if (direction === 'horizontal' || direction === 'both') {
        transform += `translateX(${mouseX}px) `;
      }
      if (direction === 'vertical' || direction === 'both') {
        transform += `translateY(${mouseY}px) `;
      }
    }

    // Scroll parallax effect
    if (scrollParallax && isVisible) {
      const scrollOffset = scrollPosition * scrollSpeed;
      
      if (direction === 'vertical' || direction === 'both') {
        transform += `translateY(${scrollOffset}px) `;
      }
      if (direction === 'horizontal' || direction === 'both') {
        transform += `translateX(${scrollOffset * 0.5}px) `;
      }
    }

    // Speed multiplier
    if (transform) {
      element.style.transform = transform.trim();
      element.style.willChange = 'transform';
    } else {
      element.style.transform = '';
      element.style.willChange = 'auto';
    }

  }, [mousePosition, scrollPosition, speed, direction, offset, mouseParallax, mouseStrength, scrollParallax, scrollSpeed, isVisible]);

  // Setup event listeners
  useEffect(() => {
    if (mouseParallax) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    if (scrollParallax) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      // Initial check
      handleScroll();
    }

    return () => {
      if (mouseParallax) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (scrollParallax) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [handleMouseMove, handleScroll, mouseParallax, scrollParallax]);

  return elementRef;
};

// Advanced parallax hook with multiple layers
export const useMultiLayerParallax = () => {
  const backgroundRef = useParallax({ speed: 0.3, scrollSpeed: 0.05 });
  const midgroundRef = useParallax({ speed: 0.6, scrollSpeed: 0.1 });
  const foregroundRef = useParallax({ speed: 0.9, scrollSpeed: 0.15 });
  const mouseLayerRef = useParallax({ 
    mouseParallax: true, 
    mouseStrength: 0.2, 
    scrollParallax: false 
  });

  return { backgroundRef, midgroundRef, foregroundRef, mouseLayerRef };
};

// Scroll progress hook
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollProgress;
};

// Smooth reveal animation hook
export const useRevealAnimation = (options: { threshold?: number; delay?: number } = {}) => {
  const { threshold = 0.1, delay = 0 } = options;
  const elementRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isRevealed) {
            setTimeout(() => setIsRevealed(true), delay);
          }
        });
      },
      { threshold }
    );

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, delay, isRevealed]);

  return { elementRef, isRevealed };
};