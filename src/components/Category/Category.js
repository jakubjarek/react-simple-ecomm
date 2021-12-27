import { RiCloseFill } from 'react-icons/ri';

function Category({ category, onClick }) {
  return (
    <li
      className="flex-shrink-0 bg-white transition-colors  shadow-sm rounded-full w-fit cursor-pointer"
      aria-label={`Remove category ${category}`}
      onClick={() => onClick(category)}
    >
      <div>
        <div className="flex items-center justify-center px-3 py-1">
          <span className="text-sm mr-1">{category}</span>
          <RiCloseFill size={14} viewBox="0 0 20 20" />
        </div>
      </div>
    </li>
  );
}

export default Category;
