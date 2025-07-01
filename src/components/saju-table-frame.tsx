interface SajuTableFrameProps {
  children?: React.ReactNode;
}

export const SajuTableFrame = ({ children }: SajuTableFrameProps) => {
  return (
    <div className="absolute -top-6 left-6 right-6 z-20 mx-auto max-w-[350px] h-auto bg-[#F5F3EC] border-3 drop-shadow-xl">
      <div className="h-full w-full flex items-center justify-center">
        <div className="grid grid-cols-[5px_1fr_5px] grid-rows-[5px_1fr_5px] h-full w-full gap-0 border-0">
          <div className="flex items-center justify-center border-b border-r border-[#2B557E]"></div>
          <div className="flex items-center justify-center border-b border-r border-[#2B557E]"></div>
          <div className="flex items-center justify-center border-b border-[#2B557E]"></div>
          <div className="flex items-center justify-center border-b border-r border-[#2B557E]"></div>
          <div className="flex flex-col border-b border-r border-[#2B557E] px-3 pb-6 overflow-hidden">
            {children}
          </div>
          <div className="flex items-center justify-center border-b border-[#2B557E]"></div>
          <div className="flex items-center justify-center border-r border-[#2B557E]"></div>
          <div className="flex items-center justify-center border-r border-[#2B557E]"></div>
          <div className="flex items-center justify-center"></div>
        </div>
      </div>
    </div>
  );
};
