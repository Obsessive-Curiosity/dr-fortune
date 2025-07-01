import Image from "next/image";
import { Trans } from "react-i18next";

interface ChapterHeaderProps {
  chapterNumber: number; // 예: "제 1장"
  titleKey: string; // 예: "나의 사주 팔자"
}

export const ChapterHeader = ({
  chapterNumber,
  titleKey,
}: ChapterHeaderProps) => {
  return (
    <div className="w-full font-hangle text-xl text-center text-white flex flex-col items-center justify-center gap-3 z-30">
      <h2>
        <Trans
          i18nKey="chapter.number"
          values={{ chapterNumber }}
          ns="common"
        />
      </h2>
      <Image
        src="/images/chapter-divider.svg"
        alt="장식 구분선"
        width={157}
        height={20}
      />
      <h1>
        <Trans i18nKey={`chapter.title.${titleKey}`} ns="common" />
      </h1>
    </div>
  );
};
