"use client"

import Header from "@/components/Header";
import React, { useState } from "react";

function page() {
    const [count, setCount] = useState(0)

    const handleIncrement = ()=>{
        if(count < 10){
            setCount(count + 1)
        }
    }
    const handleDecrement = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
        console.log("Click");
        
    }

  return (
    <div>
      {/* <div>this is home page</div> */}
      {/* <Header pageName="Home" pageNumber={2} /> */}
      {/* <Header pageName="About" pageNumber={5} />
      <Header pageName="Contact us" pageNumber={5}/> */}

      <p>Your Page count is {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}

export default page;
