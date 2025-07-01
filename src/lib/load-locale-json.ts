import { type Locale } from "@/lib/i18next.setting";
import fs from "fs";
import path from "path";

export function loadLocaleJson(locale: Locale, namespace: string = "common") {
  try {
    // process.cwd()는 프로젝트의 루트 디렉토리 경로를 반환합니다.
    const filePath = path.join(
      process.cwd(),
      `public/locales/${locale}/${namespace}.json`
    );
    const jsonData = fs.readFileSync(filePath, "utf8");
    return JSON.parse(jsonData);
  } catch (error) {
    console.error(
      `Error loading locale file for ${locale}/${namespace}:`,
      error
    );
    return null; // 파일이 없거나 오류 발생 시 null 반환
  }
}
