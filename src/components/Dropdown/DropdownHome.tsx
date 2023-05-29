import React, { useState } from 'react';

const DropdownHome: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="relative">
      <button
        className="
        font-semibold py-2 px-4 rounded inline-flex
        items-center desktop:hidden w-full justify-center"
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
    </div>
    <div>
    {isOpen && (
        <ul
          className="
          bg-white text-gray-700 pt-1 w-full
          border-b border-t text-center">
          <li>
            <a
              className="hover:border-b-4 border-primary py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Demo template 1
            </a>
          </li>
          <li>
            <a
              className="hover:border-b-4 border-primary py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Demo template 2
            </a>
          </li>
        </ul>
      )}
    </div>
    </>
  );
}

export default DropdownHome;