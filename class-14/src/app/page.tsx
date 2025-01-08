"use client";

import ChildOne from "@/components/ChildOne";
import { createContext, useEffect, useRef, useState } from "react";


const UserContext = createContext({name: "", class: "", day: "", timing: ""})

export default function Home() {
  // const [count, setCount] = useState(0);
  // const [totalcount, setTotalCount] = useState(0);

  //first : Side effect run / Action
  //second : Clean up function
  //third: List of Dedendency

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  // Variant 1

  // useEffect(() => {
  //   alert("I will run on each render")
  // })

  // Variant 2

  // useEffect(() => {
  //   alert("I will run on First render")
  // }, [])

  // Variant 3

  // useEffect(() => {

  //   alert("I will run only when count value is updated !")

  //   return ()=>{
  //     alert("Count value Unmounted")
  //   }
  // }, [count])

  // let val = useRef(0)

  // function handleIncrement(){
  //   val.current = val.current + 1
  //   console.log('You clicked ' + val.current + ' times!');
  // }

  // function handleDecrement(){
  //   val.current = val.current - 1

  //   console.log('You clicked ' + val.current + ' times!');

  // }
  // console.log(val)

  // useEffect(()=>{
  //   console.log("Count Value", val += 1 )
  // })


  // const bgRef = useRef<any>(null)

  // function handleBgColor(){
  //   bgRef.current.style.backgroundColor = "green"
  // }

  return (
    //! USESTATE
    
    // {/* <div className="flex flex-col justify-center items-center h-screen">

    // <h2 className="text-3xl py-8">Count </h2>

    //   <div className="flex justify-center items-center  gap-10">
    //     <button className="bg-red-600 p-6" onClick={()=> setCount(count + 1)}>+</button>
    //     <p className="text-3xl">{count}</p>
    //     <button className="bg-blue-600 p-6" onClick={()=> setCount(count - 1)}>-</button>
    //   </div>

    //   <h2 className="text-3xl py-8">Total Count </h2>

    //   <div className="flex justify-center items-center  gap-10">
    //     <button className="bg-red-600 p-6" onClick={()=> setTotalCount(totalcount + 1)}>+</button>
    //     <p className="text-3xl">{totalcount}</p>
    //     <button className="bg-blue-600 p-6" onClick={()=> setTotalCount(totalcount - 1)}>-</button>
    //   </div>
    // </div> */}

    //! useREF

    // <div className="flex justify-center items-center h-screen  gap-10">
    //   <button className="bg-red-600 p-6" onClick={()=>handleIncrement()}>
    //     +
    //   </button>
    //   <p className="text-3xl">{val.current}</p>
    //   <button className="bg-blue-600 p-6" onClick={()=> handleDecrement()}>
    //     -
    //   </button>
    // </div>


    // <div className="flex justify-center items-center h-screen gap-10">


    // <div ref={bgRef} className="bg-yellow-500 h-40 w-40">

    // </div>

    // <button onClick={handleBgColor} className="bg-gray-400 text-white px-4 py-6 rounded-lg">Change Color</button>
    // </div>

//! USECONTEXT HOOK

{
  /* <UserContext.Provider value={{name: "Ali", class: "GIAIC", day: "Tuesday", timing: "2 TO 5"}} >
    <ChildOne />
</UserContext.Provider> */
}


  );
}

export {UserContext}
