import React from 'react';

const Dropdown: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const menuRef = React.useRef<HTMLUListElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleMenuMouseLeave = () => {
    setIsOpen(false);
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        className="
        text-background-3 mobile:hidden font-semibold
        inline-flex items-center desktop:flex"
        onClick={toggleDropdown}
      >
        <span>HOME</span>
        <svg
          className="fill-current w-4 h-4 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M5 7l5 5 5-5z" />
        </svg>
      </button>
      {isOpen && (
        <ul
          className="absolute bg-white text-gray-700 pt-1"
          ref={menuRef}
          onMouseLeave={handleMenuMouseLeave}>
          <li>
            <a
              className="rounded-t hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Demo template 1
            </a>
          </li>
          <li>
            <a
              className="rounded-t hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Demo template 2
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;