import { useEffect } from 'react';

function CartModal({ children }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  });

  return (
    <div className="fixed top-0 w-screen h-screen flex items-start justify-center bg-black/50">
      {children}
    </div>
  );
}

export default CartModal;
