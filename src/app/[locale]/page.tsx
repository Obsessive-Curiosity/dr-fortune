import { LanguageSelector } from "@/components/LanguageSelector";
import { Section1 } from "@/sections/section1";
import { Section2 } from "@/sections/section2";
import { Section3 } from "@/sections/section3";
import { Section4 } from "@/sections/section4";

export default function Page() {
  return (
    <main className="bg-[#f3f2ef] min-w-[280px] max-w-md w-full min-h-screen">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <LanguageSelector />
    </main>
  );
}
