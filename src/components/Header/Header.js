import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart-context';
import { RiUser3Line, RiShoppingBagLine } from 'react-icons/ri';

const categories = ["Women's clothing", "Men's clothing", 'Jewelery', 'Electronics'];

const Header = () => {
  const { cartContent } = useContext(CartContext);

  return (
    <div>
      <header>
        <div className="border-b border-gray-100">
          <div className="max-w-[1184px] mx-auto px-4 xl:px-0">
            <div className="flex items-center justify-between pt-4">
              <div className="basis-1/2 flex justify-start">
                <div>
                  <Link to="/">
                    <div className="flex items-center">
                      <span className="block w-7 h-7 rounded-full bg-black"></span>
                      <span className="font-extrabold font-sherif text-xl">shop</span>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="basis-1/2 flex justify-end">
                <div className="flex gap-2">
                  <div className="hover:bg-slate-100 transition-colors rounded-sm">
                    <Link to="/products" title="Log in">
                      <div className="p-2">
                        <RiUser3Line size={24} />
                      </div>
                    </Link>
                  </div>
                  <div className="relative hover:bg-slate-100 transition-colors rounded-sm">
                    <Link to="/cart" title="Your cart">
                      <div className="p-2">
                        <RiShoppingBagLine size={24} />
                      </div>
                      {cartContent.length ? (
                        <span className="absolute top-0 right-0 w-5 h-5 text-center bg-orange-500 rounded-full text-sm text-white font-semibold ">
                          {cartContent.length}
                        </span>
                      ) : null}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-2 overflow-y-auto">
              <ul className="flex gap-2">
                {categories.map((c) => (
                  <li key={c}>
                    <div className="hover:bg-slate-100 transition-transform">
                      <a href="/">
                        <span className="px-2 whitespace-nowrap text-sm">{c}</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className=" flex items-center justify-center"></div>
        </div>
      </header>
    </div>
  );
};

export default Header;
