import { NextResponse } from 'next/server'

export function middleware(request) {
    console.log("middleware executed!")
    const allCookies = request.cookies.getAll();
    const cookie = allCookies.find((cookie) => cookie.name === "access_token")?.value
    console.log(cookie)
    if (!cookie) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/text', '/video/:path*']
}