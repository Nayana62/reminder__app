import React from 'react'
import Header from './Header'

function Layout(props) {
    const { children } = props
  return (
    <div className='flex flex-col min-h-screen relative bg-[#d4ecec]'>
        <Header/>

        <main className='flex-1 flex flex-col p-4'>
        {children}
        </main>

    </div>
  )
}

export default Layout