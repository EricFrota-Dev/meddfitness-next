// import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
// import { NextResponse } from "next/server";

// export async function middleware(req: any) {
//   const res = NextResponse.next();
//   const supabase = createMiddlewareClient({ req, res });
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user && req.nextUrl.pathname.startsWith("/dashboard")) {
//     return NextResponse.redirect(new URL("/auth/login", req.url));
//   }

//   return res;
// }

// export const config = {
//   matcher: ["/dashboard/:path*"],
// };
