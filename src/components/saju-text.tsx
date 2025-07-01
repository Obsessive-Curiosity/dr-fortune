export enum TextCellType {
  HEAD = "head",
  CONTENT = "content",
}

interface TextCellProps {
  hangle: string; // 한국어, 예: "비견", "장생"
  hanja: string; // 한자, 예: "比肩", "長生"
  type?: TextCellType; // optional로 설정, 기본값 content
  className?: string; // optional custom style
}

export const TextCell = ({
  hangle,
  hanja,
  type = TextCellType.CONTENT,
  className,
}: TextCellProps) => {
  const isHead = type === TextCellType.HEAD;
  const padding = isHead ? "py-1" : "py-[6px]";
  const hanjaSize = isHead ? "text-xs" : "text-sm";
  const hangleSize = isHead ? "text-[8px]" : "text-[10px]";

  return (
    <div
      className={`flex flex-col items-center justify-center text-center ${padding} ${className}`}
    >
      <span className={`font-hanja ${hanjaSize}`}>{hanja}</span>
      <span className={`font-hangle ${hangleSize}`}>({hangle})</span>
    </div>
  );
};
