// eslint-disable-next-line @typescript-eslint/no-unused-vars

import { NextRequest, NextResponse } from "next/server";
const books = [
  {
    id: 1,
    title: "Book 1",
    author: "Author 1",
  },
  {
    id: 2,
    title: "Book 2",
    author: "Author 2",
  },

  {
    id: 3,
    title: "Book 3",
    author: "Author 3",
  },
];
export async function GET(
  reguest: NextRequest,
  { params }: { params: { id: number } }
) {
  console.log(params.id);
  const currentBook = books.find((book) => params.id == book.id);

  console.log(currentBook);
  return NextResponse.json({
    mesage: `hello from server dynamic route id : ${params.id}`,
    book: currentBook,
  });
}
