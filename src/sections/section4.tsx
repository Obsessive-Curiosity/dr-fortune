import { SajuHead } from "@/components/saju-head";
import { SajuTable } from "@/components/saju-table";
import { SajuTableFrame } from "@/components/saju-table-frame";
import { user, userSaju } from "@/mock/user";

export const Section4 = () => {
  return (
    <section className="relative bg-[#F3F2EF] h-[678px]">
      <SajuTableFrame>
        <SajuHead name={user.name} birthInfo={user.birthInfo} />
        <SajuTable userSaju={userSaju} />
      </SajuTableFrame>
    </section>
  );
};
