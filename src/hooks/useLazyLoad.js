import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Custom hook for lazy loading elements using Intersection Observer
 * @param {Object} options - Intersection Observer options
 * @param {Element} options.root - The element that is used as the viewport for checking visibility
 * @param {string} options.rootMargin - Margin around the root
 * @param {number|number[]} options.threshold - Percentage of the target's visibility needed to trigger the callback
 * @returns {[React.RefObject, boolean]} A ref to attach to the target element and a boolean indicating if the element is in view
 */
export const useLazyLoad = (options = {}) => {
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef();
  const { root = null, rootMargin = '0px', threshold = 0.1 } = options;
  const currentRef = ref.current;

  useEffect(() => {
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      { root, rootMargin, threshold }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [currentRef, root, rootMargin, threshold]);

  return [ref, isIntersecting];
};

/**
 * LazyImage component that loads images only when they enter the viewport
 */
const LazyImage = ({ src, alt, className = '', ...props }) => {
  const [ref, inView] = useLazyLoad();
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div ref={ref} className={`lazy-load-container relative ${className}`}>
      {inView && (
        <>
          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-300`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            {...props}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-gray-700 animate-pulse rounded" />
          )}
        </>
      )}
    </div>
  );
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export { LazyImage };
