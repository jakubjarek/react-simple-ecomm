import { useEffect } from 'react';

function CartModal({ children }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
 
    return () => {
      document.body.style.overflow = 'visible';
    };
  });

  return (
    <div className="absolute top-0 w-screen h-screen bg-black opacity-50 flex items-center justify-center overflow-hidden">
      {/*  */}
      {/*  */}
    </div>
  );
}

export default CartModal;
