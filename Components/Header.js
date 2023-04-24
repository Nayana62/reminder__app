import React, {useEffect, useState} from 'react'
import Modal from './Modal'

function Header() {

  const [openModal, setOpenModal] = useState(false)

  return (
    <> 
      {openModal && <Modal setOpenModal={setOpenModal} />}
        <div className='sticky top-0 w-full left-0 bg-[#3c7482] text-white p-4 flex items-center justify-between '>
            <h1 className='text-3xl sm:text-6xl select-none'>Reminder App</h1>
            <i onClick={() => setOpenModal(true)} className="fa-solid fa-user text-xl sm:text-3xl duration-300 hover:opacity-40 cursor-pointer"></i>
        </div>
    </>
  )
}

export default Header