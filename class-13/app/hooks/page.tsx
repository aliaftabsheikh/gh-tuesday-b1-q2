// "use client";
// import React, { useEffect, useState } from "react";

// const page = () => {
//   const [count, setCount] = useState(0);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // console.log('hello')
//     setLoading(true);
//     setTimeout(() => {
//       setCount(count + 1);
//       setLoading(false);
//     }, 5000);
//   }, []);

//   return <div>{loading ? <div>Loading</div> : <div>This is my page</div>}</div>;
// };

// export default page;

import React from 'react'

const Page = () => {
  return (
    <div>Page</div>
  )
}

export default Page