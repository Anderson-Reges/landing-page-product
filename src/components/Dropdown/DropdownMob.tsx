import React, { useState } from 'react';
import menu from '../../asserts/menu-icon.svg'
import Xicon from '../../asserts/x-icon.svg'

const DropdownMob: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className="relative">
      <button
        className="font-semibold py-2 px-4 rounded inline-flex items-center desktop:hidden"
        onClick={toggleDropdown}
      >
        <img src={isOpen ? Xicon : menu} alt=''/>
      </button>
    </div>
    <div>
    {isOpen && (
        <ul className="absolute bg-white text-gray-700 pt-1 left-[0px] top-[7.2em] w-full border-b">
          <li>
            <a
              className="rounded-t hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Opção 1
            </a>
          </li>
          <li>
            <a
              className="hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Opção 2
            </a>
          </li>
          <li>
            <a
              className="rounded-b hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
              href="#"
            >
              Opção 3
            </a>
          </li>
        </ul>
      )}
    </div>
    </>
  );
};

export default DropdownMob;
