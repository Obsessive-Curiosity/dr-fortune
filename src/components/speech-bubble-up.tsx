import Image from "next/image";

// props 인터페이스를 다시 활성화하여 children을 받도록 합니다.
interface SpeechBubbleProps {
  children: React.ReactNode;
  className?: string;
}

export const SpeechBubbleUp = ({ children, className }: SpeechBubbleProps) => {
  return (
    // 부모 div는 자식 요소들의 위치 기준점(relative)이 됩니다.
    // inline-block을 추가하여 내용만큼의 크기를 갖도록 합니다.
    <div className={`relative inline-block w-[215px] h-[139px] ${className}`}>
      {/* 1. 배경이 될 말풍선 이미지 */}
      <Image
        src="/images/speech-bubble-up.svg"
        alt="Speech Bubble"
        width={215} // width는 정수값 사용을 권장합니다.
        height={139} // height는 정수값 사용을 권장합니다.
        className="drop-shadow-lg"
      />

      {/* 2. 이미지 위에 겹쳐질 텍스트를 담는 컨테이너 */}
      <div className="absolute inset-0">
        <div className="text-center w-full h-[116px] my-[23px] flex items-center justify-center">
          {/* children으로 받은 내용을 여기에 표시합니다. */}
          <p className="font-bubble-400 text-gray-800 text-base leading-[150%] [letter-spacing:-0.4px]">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};
