"use client";
import React, { useEffect, useState } from "react";

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const page = () => {
  const [data, setData] = useState<ITodo[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const books: ITodo[] = await response.json();
      setData(books);
      console.log("books data>>", books);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="text-2xl text-center font-bold">Todo list</div>
      <div></div>

      <div className="flex flex-col justify-between">
        {data.map((item, index: number) => {
          return (
            <div key={index} className="border-2 border-black">
              <p>{item.title}</p>
              <p>{`${item.completed}`}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
