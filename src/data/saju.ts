export type Element5 = "木" | "火" | "土" | "金" | "水";
export const elementInfo = {
  wood: {
    hanja: "木",
    bgColor: "green", // 초록색
    textColor: "black", // 검정색
  },
  fire: {
    hanja: "火",
    bgColor: "red", // 빨강색
    textColor: "black", // 검정색
  },
  earth: {
    hanja: "土",
    bgColor: "yellow", // 노랑색
    textColor: "black", // 검정색
  },
  metal: {
    hanja: "金",
    bgColor: "white", // 흰색
    textColor: "black", // 검정색
  },
  water: {
    hanja: "水",
    bgColor: "black", // 검정색
    textColor: "white", // 흰색
  },
};

export type YinYang = "음" | "양";

// 천간 타입
export type Cheongan =
  | "甲"
  | "乙"
  | "丙"
  | "丁"
  | "戊"
  | "己"
  | "庚"
  | "辛"
  | "壬"
  | "癸";

// 천간 정보
export const cheonganInfo = {
  辛: {
    index: 1,
    yinYang: "yinYang.minus",
    label: "cheongan.jewel",
    element: "element.metal",
  },
  壬: {
    index: 2,
    yinYang: "yinYang.plus",
    label: "cheongan.sea",
    element: "element.water",
  },
  癸: {
    index: 3,
    yinYang: "yinYang.minus",
    label: "cheongan.river",
    element: "element.water",
  },
  甲: {
    index: 4,
    yinYang: "yinYang.plus",
    label: "cheongan.tree",
    element: "element.wood",
  },
  乙: {
    index: 5,
    yinYang: "yinYang.minus",
    label: "cheongan.grass",
    element: "element.wood",
  },
  丙: {
    index: 6,
    yinYang: "yinYang.plus",
    label: "cheongan.sun",
    element: "element.fire",
  },
  丁: {
    index: 7,
    yinYang: "yinYang.minus",
    label: "cheongan.fire",
    element: "element.fire",
  },
  戊: {
    index: 8,
    yinYang: "yinYang.plus",
    label: "cheongan.mountain",
    element: "element.earth",
  },
  己: {
    index: 9,
    yinYang: "yinYang.minus",
    label: "cheongan.earth",
    element: "element.earth",
  },
  庚: {
    index: 10,
    yinYang: "yinYang.plus",
    label: "cheongan.stone",
    element: "element.metal",
  },
} as const;

export type JiJi =
  | "子"
  | "丑"
  | "寅"
  | "卯"
  | "辰"
  | "巳"
  | "午"
  | "未"
  | "申"
  | "酉"
  | "戌"
  | "亥";

// 지지 타입
export const jiJiInfo = {
  酉: {
    index: 1,
    yinYang: "yinYang.minus",
    label: "jiJi.chicken",
    element: "element.metal",
  },

  戌: {
    index: 2,
    yinYang: "plus",
    label: "jiJi.dog",
    element: "element.earth",
  },
  亥: {
    index: 3,
    yinYang: "minus",
    label: "jiJi.pig",
    element: "element.water",
  },
  子: {
    index: 4,
    yinYang: "plus",
    label: "jiJi.mouse",
    element: "element.water",
  },
  丑: {
    index: 5,
    yinYang: "minus",
    label: "jiJi.cow",
    element: "element.earth",
  },
  寅: {
    index: 6,
    yinYang: "plus",
    label: "jiJi.tiger",
    element: "element.wood",
  },
  卯: {
    index: 7,
    yinYang: "minus",
    label: "jiJi.rabbit",
    element: "element.wood",
  },
  辰: {
    index: 8,
    yinYang: "plus",
    label: "jiJi.dragon",
    element: "element.earth",
  },
  巳: {
    index: 9,
    yinYang: "minus",
    label: "jiJi.snake",
    element: "element.fire",
  },
  午: {
    index: 10,
    yinYang: "plus",
    label: "jiJi.horse",
    element: "element.fire",
  },
  未: {
    index: 11,
    yinYang: "minus",
    label: "jiJi.sheep",
    element: "element.earth",
  },
  申: {
    index: 12,
    yinYang: "plus",
    label: "jiJi.monkey",
    element: "element.metal",
  },
};
