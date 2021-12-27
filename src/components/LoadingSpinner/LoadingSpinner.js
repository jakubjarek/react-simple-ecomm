import { CgSpinner } from 'react-icons/cg';

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <CgSpinner className="animate-spin" size={64} />
    </div>
  );
}

export default LoadingSpinner;
