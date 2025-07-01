"use client";

import Image from "next/image";
import { Trans } from "react-i18next";

interface SajuHeadProps {
  name: string;
  birthInfo: {
    year: string;
    month: string;
    day: string;
    time: string;
  };
}

export const SajuHead = ({
  name,
  birthInfo: { year, month, day, time },
}: SajuHeadProps) => {
  return (
    <div className="flex">
      <Image
        src={"/images/cloud-left.svg"}
        alt={`${name}님의 사주`}
        width={56}
        height={38}
        className="absolute left-1 top-9"
      />

      <article className="w-full my-8 text-center flex flex-col items-center gap-3">
        <p className="font-bubble-400 text-[clamp(0.75rem, 4cqw, 1rem)]">
          <Trans i18nKey="saju.title" values={{ name }} ns="common" />
        </p>
        <h1 className="font-bubble-700 text-[clamp(1rem,5.5cqw,1.25rem)]">
          <Trans
            i18nKey="saju.birth"
            values={{ year, month, day, time }}
            ns="common"
          />
        </h1>
      </article>

      <Image
        src={"/images/cloud-right.svg"}
        alt={`${name}님의 사주`}
        width={56}
        height={38}
        className="absolute right-[5px] top-9"
      />
    </div>
  );
};
