import { useAuth } from '@/context/AuthContext'
import React, { useEffect, useState } from 'react'
import ReactDom  from 'react-dom'


function Modal(props) {
    const { setOpenModal } = props
    const [_document, set_document] = useState(null)
    const { logout } = useAuth()

    useEffect(() => {
        set_document(document)
      }, [])
     
    if(!_document) { return null}

  return ReactDom.createPortal (
    <div className='fixed w-screen h-screen top-0 left-0 bg-[#3c7482] text-white flex flex-col'>
        <div className='flex items-center justify-between border-b border-solid border-[#d4ecec] p-4'>
            <h1 className='text-2xl sm:text-4xl select-none '>MENU</h1>
            <i className="fa-solid fa-xmark cursor-pointer text-2xl sm:text-4xl duration-300 hover:rotate-90"
            onClick={() => setOpenModal(false)}
            ></i>
        </div>
        <div className='flex flex-col gap-3 p-4'>
            <h2 className='cursor-pointer text-xl sm:text-2xl duration-300 hover:pl-2 ' 
            onClick={() => {
                logout()
                setOpenModal(false)
            }}
            >Logout</h2>
        </div>
        
    </div>,
    _document.getElementById('portal')
  )
}

export default Modal