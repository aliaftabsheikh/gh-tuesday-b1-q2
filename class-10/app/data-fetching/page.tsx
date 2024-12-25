import React from "react";

const Header = async () => {
  type IBook = {
    id: number;
    name: string;
    type: string;
    available: boolean;
  };

  const response = await fetch("https://simple-books-api.glitch.me/books/");

  const books: IBook[] = await response.json();

  console.log(books);

  return (
    <>
      <div className="text-2xl text-center font-bold">Book Library</div>
      <div></div>

      <div className="flex justify-between">
        {books.map((item, index: number) => {
          return (
            <div key={index} className="border-2 border-black">
              <p>{item.name}</p>
              <p>{item.type}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Header;
