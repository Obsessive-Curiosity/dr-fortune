"use client";

import {
  Cheongan,
  cheonganInfo,
  elementInfo,
  JiJi,
  jiJiInfo,
} from "@/data/saju";
import { useTranslation } from "next-i18next";

interface SajuCellProps {
  hanja: Cheongan | JiJi; // 한자, 예: "丁", "己"
}

export const SajuCell = ({ hanja }: SajuCellProps) => {
  const { t } = useTranslation("common"); // i18n 훅

  // 타입 가드
  const isCheongan = (hanja: string): hanja is Cheongan =>
    hanja in cheonganInfo;
  const isJiJi = (hanja: string): hanja is JiJi => hanja in jiJiInfo;

  let info:
    | (typeof cheonganInfo)[Cheongan]
    | (typeof jiJiInfo)[JiJi]
    | undefined = undefined;

  if (isCheongan(hanja)) {
    info = cheonganInfo[hanja];
  } else if (isJiJi(hanja)) {
    info = jiJiInfo[hanja];
  }

  if (!info) return null; // 예외 처리

  const element = info.element.split(".").pop() as keyof typeof elementInfo; // 요소 정보
  const { bgColor } = elementInfo[element]; // 배경색

  const isMetal = info.element === "element.metal"; // 금
  const textColorStyle = isMetal ? "black" : "white"; // 글자색
  const bgColorStyle = `bg-saju-gradient-${bgColor}`; // 배경색

  return (
    <div
      className={`w-full aspect-square flex flex-col items-center justify-center ${textColorStyle} ${bgColorStyle} rounded-xl overflow-hidden`}
    >
      <p className="font-hangle [font-size:clamp(8px,4cqw,10px)] whitespace-nowrap truncate max-w-full">
        {t(info.element)}
      </p>
      <h1 className="font-hanja [font-size:clamp(20px,4cqw,24px)] leading-none [margin-bottom:clamp(2px,1.5cqw,8px)]">
        {hanja}
      </h1>
    </div>
  );
};
