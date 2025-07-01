"use client";

import { useRouter, usePathname } from "next/navigation";
import { i18nConfig, type Locale } from "../lib/i18next.setting";
import { useState } from "react";
import Image from "next/image";
import i18n from "@/lib/i18n"; // i18next 인스턴스 가져오기

export const LanguageSelector = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname(); // 예: "/ko/about"

  const languages = i18nConfig.languages;

  // 1. URL 경로에서 현재 언어를 "안전하게" 추출합니다.
  //    split으로 자른 값이 실제 지원하는 언어 목록에 있는지 find로 확인합니다.
  //    일치하는 것이 없으면 undefined가 됩니다.
  const currentLocale = languages.find(
    (lang) => pathname.split("/")[1] === lang
  );

  const toggleDropdown = () => setOpen((prev) => !prev);

  const changeLanguage = (newLang: Locale) => {
    // currentLocale이 아직 확정되지 않았을 때의 오작동을 막는 방어 코드
    if (!currentLocale) return;

    // 1. i18next 언어 변경 (쿠키 즉시 업데이트)
    i18n.changeLanguage(newLang);

    // 2. 현재 경로에서 언어 부분만 교체하여 새로운 URL 생성
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLang}`);

    // 3. URL 변경 (다른 모든 상태는 이 변경으로부터 파생됨)
    router.push(newPath);

    setOpen(false);
  };

  // 2. currentLocale이 아직 확정되지 않았다면(렌더링 초기), 스켈레톤을 보여줍니다.
  if (!currentLocale) {
    // 이 스켈레톤은 페이지 로드 시 아주 잠깐만 보이거나, 거의 보이지 않을 것입니다.
    return (
      <div className="sticky bottom-4 ml-4 z-50">
        <div className="relative inline-block">
          <div className="flex items-center gap-2 bg-gray-100 border px-2 py-2 rounded shadow animate-pulse">
            <div className="h-5 w-5 rounded-full bg-gray-300"></div>
            <div className="h-5 w-6 rounded bg-gray-300"></div>
          </div>
        </div>
      </div>
    );
  }

  // 이제 currentLocale은 'ko' 또는 'en'임이 100% 보장됩니다.
  return (
    <div className="sticky bottom-4 ml-4 z-50">
      <div className="relative inline-block">
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-2 bg-white border px-2 py-2 rounded shadow hover:cursor-pointer"
        >
          <Image
            src="/icons/globe.svg"
            alt="Select language"
            width={20}
            height={20}
          />
          {/* 이제 ?. 옵셔널 체이닝이 필요 없습니다. */}
          <span className="w-6 text-center font-semibold">
            {currentLocale.toUpperCase()}
          </span>
        </button>

        {open && (
          <ul className="absolute bottom-full mb-1 left-0 bg-white border rounded shadow z-50 w-full">
            {languages.map((lang) => (
              <li
                key={lang}
                className="first:rounded-t last:rounded-b overflow-hidden"
              >
                <button
                  onClick={() => changeLanguage(lang)}
                  className="w-full text-left px-2 py-2 hover:bg-gray-100 hover:cursor-pointer disabled:bg-gray-200 disabled:cursor-not-allowed"
                  disabled={lang === currentLocale}
                >
                  {lang.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
