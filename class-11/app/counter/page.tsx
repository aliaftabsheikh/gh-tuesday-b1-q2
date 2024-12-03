"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  let name = "fahad";
  name = "Ali";

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    // <Header/>

    <div className="flex justify-center items-center gap-4 h-screen">
      {/* <Button
        onClick={increment}
        onMouseEnter={() => console.log("mouse entered on + button")}
        onMouseLeave={() => console.log("mouse left")}
        variant="default"
      >
        +
      </Button>

      {count}

      <Button variant="destructive" onClick={decrement}>
        -
      </Button> */}
       {/* <Button
        onClick={increment}
        onMouseEnter={() => console.log("mouse entered on + button")}
        onMouseLeave={() => console.log("mouse left")}
        variant="default"
      ></Button> */}
      <input
        type="text"
        placeholder="Enter some text"
        className="h-6 w-96 border border-black"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
}
