import { SajuKey, UserSajuType } from "@/mock/user";
import { SajuCell } from "./saju-cell";
import { TextCell, TextCellType } from "./saju-text";

const headerCells = [
  { hangle: "시", hanja: "時" },
  { hangle: "일", hanja: "日" },
  { hangle: "월", hanja: "月" },
  { hangle: "년", hanja: "年" },
];

interface SajuTableProps {
  userSaju: UserSajuType;
}

export const SajuTable = ({ userSaju }: SajuTableProps) => {
  return (
    <table className="w-full mx-auto border-collapse table-fixed break-all text-center">
      <colgroup>
        <col className="w-[16%]" />
        <col className="w-[21%]" />
        <col className="w-[21%]" />
        <col className="w-[21%]" />
        <col className="w-[21%]" />
      </colgroup>

      <thead className="font-hanja text-xl bg-[#F5F3EC] border-b-2 border-black">
        <tr>
          <th className="border-r-2 p-2"></th>

          {headerCells.map((cell, index) => (
            <th
              key={cell.hangle}
              className={`${
                index === headerCells.length - 1
                  ? "border-r-2 border-black"
                  : "border-r-light"
              }`}
            >
              <TextCell hangle={cell.hangle} hanja={cell.hanja} />
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {/* 일간기준 천간 십성 */}
        <tr className="border-b-2">
          <td className="bg-[#F5F3EC] border-l-0 border-r-2">
            <TextCell hangle="십성" hanja="十星" type={TextCellType.HEAD} />
          </td>
          <td className="bg-white border-r-light">
            <TextCell hangle="편관" hanja="偏官" />
          </td>
          <td className="bg-white border-r-light">
            <TextCell hangle="아신" hanja="我身" />
          </td>
          <td className="bg-white border-r-light">
            <TextCell hangle="비견" hanja="比肩" />
          </td>
          <td className="bg-white border-r-2">
            <TextCell hangle="식신" hanja="食神" />
          </td>
        </tr>

        {/* 천간 */}
        <tr className="border-b-light">
          <td className="bg-[#F5F3EC] border-l-0 border-r-border">
            <TextCell hangle="천간" hanja="天干" type={TextCellType.HEAD} />
          </td>
          <td className="bg-white border-r-light p-1">
            <SajuCell hanja={userSaju[SajuKey.시간]} />
          </td>
          <td className="bg-white border-r-light p-1">
            <SajuCell hanja={userSaju[SajuKey.월간]} />
          </td>
          <td className="bg-white border-r-light p-1">
            <SajuCell hanja={userSaju[SajuKey.일간]} />
          </td>
          <td className="bg-white border-r-border p-1">
            <SajuCell hanja={userSaju[SajuKey.년간]} />
          </td>
        </tr>

        {/* 지지 */}
        <tr className="border-b-border">
          <td className="bg-[#F5F3EC] border-l-0 border-r-border">
            <TextCell hangle="지지" hanja="地支" type={TextCellType.HEAD} />
          </td>
          <td className="bg-white border-r-light p-1">
            <SajuCell hanja={userSaju[SajuKey.시지]} />
          </td>
          <td className="bg-white border-r-light p-1">
            <SajuCell hanja={userSaju[SajuKey.일지]} />
          </td>
          <td className="bg-white border-r-light p-1">
            <SajuCell hanja={userSaju[SajuKey.월지]} />
          </td>
          <td className="bg-white border-r-border p-1">
            <SajuCell hanja={userSaju[SajuKey.년지]} />
          </td>
        </tr>

        {/* 일간기준 지지 십성 */}
        <tr className="border-b-border">
          <td className="bg-[#F5F3EC] border-l-0 border-r-2">
            <TextCell hangle="십성" hanja="十星" type={TextCellType.HEAD} />
          </td>
          <td className="bg-white border-r-light">
            <TextCell hangle="상관" hanja="傷官" />
          </td>
          <td className="bg-white border-r-light">
            <TextCell hangle="편재" hanja="偏財" />
          </td>
          <td className="bg-white border-r-light">
            <TextCell hangle="상관" hanja="傷官" />
          </td>
          <td className="bg-white border-r-border">
            <TextCell hangle="편재" hanja="偏財" />
          </td>
        </tr>

        {/* 일간기준 십이운성 */}
        <tr className="border-b-2">
          <td className="bg-[#F5F3EC] border-l-0 border-r-2">
            <TextCell
              hangle="십이운성"
              hanja="十二運星"
              type={TextCellType.HEAD}
            />
          </td>
          <td className="bg-white border-r-light">
            <TextCell hangle="목욕" hanja="沐浴" />
          </td>
          <td className="bg-white border-r-light">
            <TextCell hangle="쇠" hanja="衰" />
          </td>
          <td className="bg-white border-r-light">
            <TextCell hangle="목욕" hanja="劫財" />
          </td>
          <td className="bg-white border-r-2">
            <TextCell hangle="쇠" hanja="衰" />
          </td>
        </tr>

        {/* 년지기준 십이신살 */}
        <tr className="border-b-2">
          <td className="bg-[#F5F3EC] border-l-0 border-r-2">
            <TextCell
              hangle="십이신살"
              hanja="十二運星"
              type={TextCellType.HEAD}
            />
          </td>
          <td className="bg-white border-r-light">
            <TextCell hangle="지살" hanja="地殺" />
          </td>
          <td className="bg-white border-r-light">
            <TextCell hangle="화개살" hanja="華蓋殺" />
          </td>
          <td className="bg-white border-r-light">
            <TextCell hangle="지살" hanja="劫財" />
          </td>
          <td className="bg-white border-r-2">
            <TextCell hangle="화개살" hanja="華蓋殺" />
          </td>
        </tr>

        {/* 귀인 */}
        <tr className="border-b-2">
          <td className="bg-[#F5F3EC] border-l-0 border-r-2">
            <TextCell hangle="귀인" hanja="貴人" type={TextCellType.HEAD} />
          </td>
          <td className="bg-white border-r-light flex flex-col items-center">
            <TextCell hangle="지살" hanja="地殺" />
            <TextCell hangle="지살" hanja="地殺" />
          </td>
          <td className="bg-white border-r-light">
            <TextCell hangle="화개살" hanja="華蓋殺" />
          </td>
          <td className="bg-white border-r-light">
            <TextCell hangle="지살" hanja="劫財" />
          </td>
          <td className="bg-white border-r-2">
            <TextCell hangle="화개살" hanja="華蓋殺" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};
