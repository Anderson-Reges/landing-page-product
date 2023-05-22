import React, { useState } from 'react';
import menu from '../../asserts/menu-icon.svg'
import Xicon from '../../asserts/x-icon.svg'
import DropdownHome from './DropdownHome';

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
        <ul className="absolute bg-white text-gray-700 pt-1 left-[0px] top-[7.45em] w-full border-b border-t text-center">
          <DropdownHome />
          <li onClick={() => setIsOpen(false)}>
            <a
              className="hover:border-b-4 border-primary py-2 px-4 block whitespace-no-wrap font-semibold"
              href="#"
            >
              FEATURES
            </a>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <a
              className="hover:border-b-4 border-primary py-2 px-4 block whitespace-no-wrap font-semibold"
              href="#"
            >
              TEACH SPECS
            </a>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <a
              className="hover:border-b-4 border-primary py-2 px-4 block whitespace-no-wrap font-semibold"
              href="#"
            >
              CONTACT
            </a>
          </li>
        </ul>
      )}
    </div>
    </>
  );
};

export default DropdownMob;
