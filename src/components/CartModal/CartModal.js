import { useEffect } from 'react';

function CartModal({ children }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  });

  return (
    <div className="absolute top-0 w-screen h-screen flex items-start bg-black/50 overflow-hidden">
      {children}
    </div>
  );
}

export default CartModal;
