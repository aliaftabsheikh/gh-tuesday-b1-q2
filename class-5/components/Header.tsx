// // import Link from "next/link";

// function Header(props: { pageName: string }) {
//   return <div>this is {props.pageName} page</div>;
// }

// export default Header;
'use client'
import React from 'react'

function Header({pageName, pageNumber}: {pageName: string, pageNumber: number}) {
  console.log(pageName);
  
  return (
    <div>This is {pageName} and pageNumber is {pageNumber}</div>
  )
}

export default Header