// HTTP
//GET
//PATCH
//DELETE
//PUT
//async
//await
// export async get,post,patch,delete

import { NextResponse ,NextRequest} from "next/server";
export async function GET(){
    // const  response = await fetch('https://jsonplaceholder.typicode.com/posts')

   
return NextResponse.json({Message:"Hello from Next.js API"},{status:200})}


export async function POST(request:NextRequest){
    console.log(request)
    const body = request.json();
    console.log(body)
    return NextResponse.json({message:"helo world from Api",body})
    
    

}