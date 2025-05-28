import PropTypes from 'prop-types';

/**
 * Loading spinner component used as a fallback for Suspense
 * @param {Object} props - Component props
 * @param {string} [props.className] - Additional CSS classes
 */
const LoadingFallback = ({ className = '' }) => (
  <div className={`min-h-screen flex items-center justify-center bg-gray-900 ${className}`}>
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-500" />
  </div>
);

LoadingFallback.propTypes = {
  className: PropTypes.string,
};

export default LoadingFallback;
