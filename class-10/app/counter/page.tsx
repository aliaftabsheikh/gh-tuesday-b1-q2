"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    // <Header/>

    <div className="flex justify-center items-center gap-4 h-screen">
      <Button onClick={increment} variant="default">
        +
      </Button>

      {count}

      <Button variant="destructive" onClick={decrement}>
        -
      </Button>
    </div>
  );
}
