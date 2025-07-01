const config = {
  fallbackLng: "ko",
  languages: ["ko", "en"],
  defaultNS: "common",
} as const;

export const cookieName = "i18next-dr-fortune";

export function getOptions(
  lng: string = config.fallbackLng,
  ns: string | string[] = config.defaultNS
) {
  return {
    supportedLngs: config.languages,
    fallbackLng: config.fallbackLng,
    lng,
    fallbackNS: config.defaultNS,
    defaultNS: config.defaultNS,
    ns,
  };
}

export type Locale = (typeof config.languages)[number];

export const i18nConfig = config;
