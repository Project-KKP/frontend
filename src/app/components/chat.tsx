'use client';

import { MdOutlineChat, MdClose } from 'react-icons/md';
import { FaUserCircle } from 'react-icons/fa';
import { IoMdPaperPlane } from 'react-icons/io';
import React, { useState } from 'react';
import Image from 'next/image';

function Chat() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="chat">
      <div className="fixed z-40 bottom-10 right-10">
        {isOpen && (
          <div className="chat-window bg-white rounded-lg shadow-lg mb-24 max-w-xs">
            <div className="chat-header bg-[#FBD46D] text-white p-2 rounded-t-lg flex justify-between items-center">
              <div>
                <Image src={'/logo.png'} width={100} height={100} alt="logo diskominfotik" />
              </div>
            </div>

            <div className="py-5 px-2">
              <div className="chat-body p-2 max-h-[17rem] overflow-y-auto flex flex-col justify-between">
                <div className="flex gap-2 items-center">
                  <FaUserCircle className="text-3xl mt-1" />
                  <div className="message user-message ">
                    <p className="text-xs">Diskominfotik</p>
                    <p className="bg-gray-200 p-2 rounded-tl-none rounded-lg mb-2">Hallo, apakah anda yang bisa dibantu?</p>
                  </div>
                </div>
                <div className="ms-8">
                  <div className="message admin-message place-items-end bg-blue-200 p-2 rounded-tr-none rounded-lg mb-2">Saya mempunyai pertanyaan tentang PBSE</div>
                </div>
                <div className="flex gap-2 items-center">
                  <FaUserCircle className="text-3xl mt-1" />
                  <div className="message user-message ">
                    <p className="text-xs">Diskominfotik</p>
                    <p className="bg-gray-200 p-2 rounded-tl-none rounded-lg mb-2">Hallo, apakah anda yang bisa dibantu?</p>
                  </div>
                </div>
                <div className="ms-8">
                  <div className="message admin-message place-items-end bg-blue-200 p-2 rounded-tr-none rounded-lg mb-2">Saya mempunyai pertanyaan tentang PBSE</div>
                </div>
                <div className="flex gap-2 items-center">
                  <FaUserCircle className="text-3xl mt-1" />
                  <div className="message user-message ">
                    <p className="text-xs">Diskominfotik</p>
                    <p className="bg-gray-200 p-2 rounded-tl-none rounded-lg mb-2">Hallo, apakah anda yang bisa dibantu?</p>
                  </div>
                </div>
                <div className="ms-8">
                  <div className="message admin-message place-items-end bg-blue-200 p-2 rounded-tr-none rounded-lg mb-2">Saya mempunyai pertanyaan tentang PBSE</div>
                </div>
              </div>
              <div className="chat-footer p-2 flex gap-2">
                <input type="text" className="w-full p-2 border rounded-lg" placeholder="Masukan pesan..." />
                <div className='bg-[#FBD46D] rounded-full p-3'>
                  <IoMdPaperPlane className='text-xl'/>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="bg-[#FBD46D] btn-chat p-4 rounded-full fixed right-10 bottom-10  w-max text-white shadow-md cursor-pointer hover:bg-[#ffe08b] transition-all duration-150" onClick={toggleChat}>
          {isOpen ? <MdClose className="text-4xl" /> : <MdOutlineChat className="text-4xl" />}
        </div>
      </div>
    </div>
  );
}

export default Chat;
