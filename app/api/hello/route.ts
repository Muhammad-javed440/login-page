import { NextRequest, NextResponse } from "next/server";

export async function GET(reguest: NextRequest) {
  // const searchParams=reguest.url
  const searchParams = reguest.nextUrl.searchParams;
  if (searchParams.has("name")) {
    const name = searchParams.get("name");
    return NextResponse.json({message:`This is hello from API, ${name}`})
  }
  else{ 
    return NextResponse.json({ message: "name is missing" }, { status: 400,statusText:'This is custom text' });
}
}

// we can put any function  here, PUT, PATCH , DELETE , BODY()

export async function POST(request: NextRequest) {
  console.log(request);
  const body = await request.json();
  console.log(body);
  return NextResponse.json({ message: "hello from api ", body });
}
