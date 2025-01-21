import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest){

    const cookieStore = await cookies();
    const isLogin = cookieStore.get("isLogin");
    console.log(isLogin?.value);

    if(isLogin?.value === "0"){
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if(isLogin?.value === "1" && request.nextUrl.pathname === "/login"){
        return NextResponse.redirect(new URL('/', request.url));
    }

    console.log("Middleware RUN !!!");
}


export const config = {
    matcher: '/',
  }