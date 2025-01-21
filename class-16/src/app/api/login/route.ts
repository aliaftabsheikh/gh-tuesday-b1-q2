import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export const GET = async () => {
  return NextResponse.json("Hello World");
};

export const POST = async (request: NextRequest) => {

    try {
        const {email} = await request.json();
        const cookieStore = await cookies();
      
      
      
        if (!email) {
          return NextResponse.json("Email is required", { status: 400 });
        }
      
        cookieStore.set("email", email);
      
        console.log(email);
      
        return NextResponse.json({ isLoggedIn: true });
    } catch (error) {
        return NextResponse.json("An error occurred", { status: 500 });
    }
 
};
