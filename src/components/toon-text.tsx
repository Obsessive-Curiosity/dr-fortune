interface ToonTextProps {
  children: React.ReactNode;
  className?: string;
}

export const ToonText = ({ children, className }: ToonTextProps) => {
  return (
    <div
      className={`font-webtoon text-black font-normal text-5xl ${className}`}
      style={{ WebkitTextStroke: `0.8px white` }}
    >
      {children}
    </div>
  );
};
