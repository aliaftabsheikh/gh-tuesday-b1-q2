import React from 'react'

function page() {
  return (
    <div className='grid h-screen grid-cols-5 grid-rows-5 md:grid-rows-4 gap-3'>
        <div className='bg-green-400 col-span-5'>Header</div>
        <div className='bg-green-400 hidden md:block row-span-2'>Sidebar</div>
        <div className='bg-green-400 col-span-5 md:col-span-2'>Content 1</div>
        <div className='bg-green-400 col-span-5 md:col-span-2'>Content 2</div>
        <div className='bg-green-400 col-span-5 md:col-span-4'>Content 3</div>
        <div className='bg-green-400 col-span-5'>Footer</div>
    </div>
  )
}

export default page