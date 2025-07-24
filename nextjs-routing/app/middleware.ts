import { NextResponse } from "next/server";

let locales = ['en', 'az']

function getLocale(request) {

}

export function middleware(request: Request) {
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    const locale = getLocale(request: Request)
    request.nextUrl.pathname = `/${locale}${pathname}`
   
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        '/((?!_next).*)',
        
    ],
}