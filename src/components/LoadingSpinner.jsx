// src/components/LoadingSpinner.jsx
import PropTypes from 'prop-types';

const LoadingSpinner = ({ size = 'medium', className = '' }) => {
  const sizeClasses = {
    small: 'h-4 w-4',
    medium: 'h-6 w-6',
    large: 'h-8 w-8'
  };

  return (
    <div className={`inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent ${sizeClasses[size]} ${className}`}
      role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
};

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string
};

export default LoadingSpinner;