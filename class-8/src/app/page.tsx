"use client"

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0)

  console.log(count);
  
  return (
    <>
    {/* // <div className="grid grid-cols-4 3xl:grid-cols-6 grid-rows-[100px_200px_200px_200px_100px] sm:grid-rows-[100px_200px_200px_100px] lg:grid-rows-[100px_200px_200px_200px_100px]
    // 3xl:grid-rows-[100px_200px_200px_100px]
    // gap-4 m-4">
    //   <div className="bg-red-400 col-span-4 text-center content-center text-4xl font-bold text-white 3xl:col-span-6">
    //     Header
    //   </div>
    //   <div className="bg-blue-400 row-span-2 text-center content-center text-4xl font-bold text-white max-sm:hidden sm:hidden lg:block lg:col-span-2 3xl:col-span-2">
    //     Sidebar
    //   </div>
    //   <div className="bg-green-400 col-span-2 max-sm:col-span-4 text-center content-center text-4xl font-bold text-white sm:col-span-4 lg:col-span-2 3xl:col-span-4">
    //     Content-1
    //   </div>
    //   <div className="bg-yellow-500 text-center content-center text-4xl font-bold text-white max-sm:col-span-4 sm:col-span-2 3xl:col-span-2 ">
    //     Content-2
    //   </div>
    //   <div className="bg-purple-400 text-center content-center text-4xl font-bold text-white max-sm:col-span-4 sm:col-span-2 lg:col-span-4 3xl:col-span-2">
    //     Content-3
    //   </div>
    //   <div className="bg-pink-400 col-span-4 text-center content-center text-4xl font-bold text-white 3xl:col-span-6">
    //     Footer
    //   </div>
    // </div> */}

    <div className="flex justify-center items-center h-[100vh] gap-8 mx-10">
      {/* "MIN-WIDTH" */}

      {/* <div className="w-96 h-96 bg-red-400 border-[5px] border-white max-sm:bg-green-400 md:bg-cyan-400 lg:bg-slate-400 xl:bg-pink-600 2xl:bg-yellow-300"> */}

        {/* MAX-WIDTH */}

        {/* <div className="w-96 h-96 bg-red-400 border-[5px] border-white max-sm:bg-green-400 md:bg-cyan-400 lg:bg-slate-400 xl:bg-pink-600 2xl:bg-yellow-300"> */}


        {/* POSITIONS */}
{/* 
        <div className="w-56 h-56 bg-red-400 border-[5px] border-white text-[32px] font-bold text-center content-center text-black ">BOX-1</div>
        <div className="w-56 h-56 bg-green-400 border-[5px] border-white text-[32px] font-bold text-center content-center text-black fixed 
        ">BOX-2</div>
        <div className="w-56 h-56 bg-blue-400 border-[5px] border-white text-[32px] font-bold text-center content-center text-black">BOX-3</div>
        <div className="w-56 h-56 bg-yellow-400 border-[5px] border-white text-[32px] font-bold text-center content-center text-black">BOX-4</div> */}


  {/* <div className={`w-56 h-56 bg-red-400 border-[5px] border-white text-[32px] font-bold text-center content-center relative text-black before:w-12 before:h-12 before:rounded-full before:absolute before:bg-gray-400 before:-top-5 before:-right-6 before:content-['${count}']`}>CART</div> */}




  {/* <button className="bg-white" onClick={()=> setCount(count+ 1)}>Add TO CART</button> */}
  <button className="bg-white text-black h-16 w-48 border-4 border-cyan-400 transition-all rounded-xl z-10 text-lg overflow-hidden shadow-xl relative before:transition-all  before:w-0 before:h-full before:bg-blue-500 before:absolute before:top-0 before:left-0 before:-z-10 before:hover:w-full" >Button 1</button>
      </div>

{/* <div className="bg-slate-300 h-[200vh] w-full"></div> */}

</>

  );
}
