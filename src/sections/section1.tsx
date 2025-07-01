"use client";

import { ChapterHeader } from "@/components/chapter-header";
import { GradientFade } from "@/components/gradient-fade";
import { SpeechBubbleUp } from "@/components/speech-bubble-up";
import Image from "next/image";
import { Trans } from "next-i18next";
import { user } from "@/mock/user";

export const Section1 = () => {
  return (
    <section className="relative w-full min-w-60 h-[652px] bg-[url('/images/bg-section-1.svg')] bg-no-repeat bg-top bg-cover">
      {/* 1. 챕터 헤더 */}
      <div className="pt-21 flex items-center justify-center">
        <ChapterHeader chapterNumber={1} titleKey="saju" />
      </div>

      {/* 2. 상단 그라데이션 */}
      <GradientFade position="top" color="from-black/70" size="h-2/5" />

      {/* 3. 여성 이미지 */}
      <div className="absolute inset-0 min-w-60 overflow-clip z-5">
        <Image
          src="/images/figure-section-1.svg"
          alt="청월아씨"
          width={298}
          height={508}
          className="absolute -bottom-20 right-0 drop-shadow-[12px_0px_16px_rgba(0,0,0,0.6)]"
        />
      </div>

      {/* 4. 하단 그라데이션 */}
      <GradientFade position="bottom" color="from-[#f3f2ef]" size="h-[30%]" />

      {/* 5. 말풍선 */}
      <div className="absolute -bottom-28 left-6 z-15">
        <SpeechBubbleUp>
          <Trans
            i18nKey="bubble.up"
            values={{ name: user.name }}
            ns="common"
            components={{ br: <br /> }}
          />
        </SpeechBubbleUp>
      </div>
    </section>
  );
};
