import React from "react";

export async function generateStaticParams() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const todos: { id: number }[] = await response.json();
  return todos.map((todo: { id: number }) => {
    id: todo.id;
  });
}

// [{id: "value"},{id: "value"},{id: "value"}]

async function GetTodo({ params }: { params: { id: string } }) {
  console.log(params);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.id}`
  );
  const book: {
    id: number;
    userId: number;
    completed: boolean;
    title: string;
  } = await response.json();
  console.log("book ", book);

  return <div>{book.title}</div>;
}

export default GetTodo;
