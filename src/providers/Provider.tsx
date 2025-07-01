"use client";

import i18n from "@/lib/i18n";
import { I18nextProvider } from "react-i18next";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export function Provider({ children }: Props) {
  const [i18nReady, setI18nReady] = useState(false);

  useEffect(() => {
    if (i18n.isInitialized && i18n.hasResourceBundle(i18n.language, "common")) {
      setI18nReady(true);
    } else {
      const handleInit = () => {
        if (i18n.hasResourceBundle(i18n.language, "common")) {
          setI18nReady(true);
        }
      };
      i18n.on("loaded", handleInit);
      return () => {
        i18n.off("loaded", handleInit);
      };
    }
  }, []);

  if (!i18nReady) return null; // hydration mismatch 방지: mode 초기 설정까지 렌더 안함

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
