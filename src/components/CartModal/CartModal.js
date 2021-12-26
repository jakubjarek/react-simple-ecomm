function CartModal({ children }) {
  return (
    <div className="fixed top-0 w-screen h-screen flex items-start justify-center bg-black/50">
      {children}
    </div>
  );
}

export default CartModal;
