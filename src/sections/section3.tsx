"use client";

import { GradientFade } from "@/components/gradient-fade";
import { SpeechBubbleDown } from "@/components/speech-bubble-down";
import { user } from "@/mock/user";
import { Trans } from "react-i18next";

export const Section3 = () => {
  return (
    <section className="relative w-full h-[306px] min-w-60 bg-[url('/images/bg-section-3.svg')] bg-no-repeat bg-top bg-cover">
      {/* 1. 하단 그라데이션 */}
      <GradientFade position="bottom" color="from-[#f3f2ef]" size="h-[30%]" />

      {/* 2. 말풍선 */}
      <div className="absolute -top-[104px] left-6 z-15">
        <SpeechBubbleDown>
          <Trans
            i18nKey="bubble.down"
            values={{ name: user.name }}
            ns="common"
            components={{ br: <br /> }}
          />
        </SpeechBubbleDown>
      </div>
    </section>
  );
};
