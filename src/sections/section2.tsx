"use client";

import { ToonText } from "@/components/toon-text";
import Image from "next/image";
import { Trans } from "react-i18next";

export const Section2 = () => {
  return (
    <section className="mt-28 mb-10">
      <div className="mr-6 flex items-center justify-between">
        <Image
          src="/images/figure2-section-2.svg"
          alt="향 연기"
          width={153}
          height={120}
        />

        <div className="relative">
          <ToonText className="absolute top-5 right-22 z-10 whitespace-nowrap">
            <Trans i18nKey="toon" ns="common" />
          </ToonText>

          <Image
            src="/images/figure1-section-2.svg"
            alt="사주를 작성하는 청월아씨의 붓질"
            width={120}
            height={285}
          />
        </div>
      </div>
    </section>
  );
};
