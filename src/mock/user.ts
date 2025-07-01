import { Cheongan, JiJi } from "@/data/saju";

export const user = {
  name: "민지영",
  birthInfo: {
    year: "1997",
    month: "05",
    day: "23",
    time: "10:25",
  },
};

export enum SajuKey {
  년간 = "년간",
  년지 = "년지",
  월간 = "월간",
  월지 = "월지",
  일간 = "일간",
  일지 = "일지",
  시간 = "시간",
  시지 = "시지",
}

export interface UserSajuType {
  [SajuKey.년간]: Cheongan;
  [SajuKey.년지]: JiJi;
  [SajuKey.월간]: Cheongan;
  [SajuKey.월지]: JiJi;
  [SajuKey.일간]: Cheongan;
  [SajuKey.일지]: JiJi;
  [SajuKey.시간]: Cheongan;
  [SajuKey.시지]: JiJi;
}

export const userSaju: UserSajuType = {
  [SajuKey.년간]: "丁",
  [SajuKey.년지]: "丑",
  [SajuKey.월간]: "乙",
  [SajuKey.월지]: "巳",
  [SajuKey.일간]: "乙",
  [SajuKey.일지]: "丑",
  [SajuKey.시간]: "辛",
  [SajuKey.시지]: "巳",
};
