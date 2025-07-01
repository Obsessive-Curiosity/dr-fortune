import { NextRequest, NextResponse } from "next/server";
import { i18nConfig, cookieName } from "./lib/i18next.setting";

function getLocaleFromCookie(request: NextRequest): string | undefined {
  return request.cookies.get(cookieName)?.value;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // i18nConfig 객체에서 필요한 값들을 구조 분해 할당으로 추출
  const { fallbackLng: defaultLocale, languages: locales } = i18nConfig;

  // 사용자가 선호하는 언어를 파악합니다. (쿠키 > 기본값)
  const preferredLocale = getLocaleFromCookie(request) || defaultLocale;

  // 현재 URL 경로에서 언어 부분을 추출합니다.
  const currentLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // console.log(
  //   `[Middleware] Path: ${pathname}, Preferred(Cookie): ${preferredLocale}, Current(URL): ${currentLocale}`
  // );

  // 리다이렉트가 필요한지 판단합니다.
  const shouldRedirect = !currentLocale || currentLocale !== preferredLocale;

  if (shouldRedirect) {
    // 리다이렉트 실행
    let newPath = pathname;

    if (currentLocale) {
      newPath = newPath.substring(currentLocale.length + 1);
    }

    const newUrl = new URL(
      `/${preferredLocale}${newPath.startsWith("/") ? newPath : `/${newPath}`}`,
      request.url
    );

    if (request.nextUrl.search) {
      newUrl.search = request.nextUrl.search;
    }

    // 루트 경로 리다이렉션 시, /en/ 가 아닌 /en 으로 가도록 정리
    if (newUrl.pathname.length > 1 && newUrl.pathname.endsWith("/")) {
      newUrl.pathname = newUrl.pathname.slice(0, -1);
    }

    // console.log(
    //   `[Middleware] REDIRECTING from ${pathname} to ${newUrl.pathname}`
    // );
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
}

// 미들웨어 실행 경로 설정 (이 코드는 완벽합니다)
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
