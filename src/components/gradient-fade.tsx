// /components/gradient-fade.tsx

type GradientFadeProps = {
  /**
   * 그라데이션의 위치를 결정합니다. 'top' 또는 'bottom'
   */
  position: "top" | "bottom";
  /**
   * 그라데이션의 색상을 지정합니다. (예: 'from-black/70', 'from-[#f3f2ef]')
   */
  color: string;
  /**
   * 그라데이션 영역의 높이를 지정합니다. (기본값: 'h-1/3')
   * 예: 'h-1/3', 'h-2/5', 'h-[100px]'
   */
  size?: string;
  /**
   * 추가로 적용할 Tailwind 클래스를 전달할 수 있습니다.
   */
  className?: string;
};

export const GradientFade = ({
  position,
  color,
  size = "h-1/3", // size prop이 없으면 기본값으로 'h-1/3'을 사용
  className,
}: GradientFadeProps) => {
  // 공통으로 사용될 기본 클래스
  const baseClasses = [
    "absolute",
    "left-0",
    "w-full",
    "z-10",
    "to-transparent",
  ];

  // position 값에 따라 다른 클래스를 추가
  if (position === "top") {
    baseClasses.push("top-0", "bg-gradient-to-b");
  } else {
    baseClasses.push("bottom-0", "bg-gradient-to-t");
  }

  // props로 받은 클래스들을 배열에 추가
  baseClasses.push(color);
  if (size) {
    baseClasses.push(size);
  }
  if (className) {
    baseClasses.push(className);
  }

  // 배열의 모든 클래스를 공백으로 합쳐서 최종 클래스 문자열을 생성
  const finalClassName = baseClasses.join(" ");

  return <div className={finalClassName} />;
};
