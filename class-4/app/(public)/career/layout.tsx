import React from 'react'

function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className='bg-slate-400'>{children}</div>
  )
}

export default Layout