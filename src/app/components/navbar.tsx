import Image from 'next/image';
import React from 'react';
import { IoIosMenu } from 'react-icons/io';
import { FaAngleDown } from 'react-icons/fa6';

function Navbar() {
  return (
    <header className="bg-[#FBD46D]">
      <nav className="flex p-4 items-center max-w-6xl mx-auto justify-between">
        <div>
          <Image src={'/logo.png'} width={150} height={100} alt="logo diskominfotik" />
        </div>
        <div>
          <ul className="flex gap-12">
            <li>Home</li>
            <li className="flex gap-2 items-center">
              Profil <FaAngleDown />
            </li>
            <li className="flex gap-2 items-center">
              Unit Kerja <FaAngleDown />
            </li>
            <li className="flex gap-2 items-center">
              PPID <FaAngleDown />
            </li>
            <li className="flex gap-2 items-center">
              Layanan Publik <FaAngleDown />
            </li>
            <li className="flex gap-2 items-center">
              Publikasi <FaAngleDown />
            </li>
          </ul>
        </div>
        <div>
          <IoIosMenu className="text-3xl" />
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
