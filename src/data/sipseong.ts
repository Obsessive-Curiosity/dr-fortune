interface Sipseong {
  label: string; // 언어별 이름, 예: "갑", "tree"
  hanja: string; // 한자 이름, 예: "甲"
}

// 십성 타입
export const SIPSEONG_TABLE: Record<number, Sipseong> = {
  0: { label: "비견", hanja: "比肩" },
  1: { label: "겁재", hanja: "劫財" },
  2: { label: "식신", hanja: "食神" },
  3: { label: "상관", hanja: "傷官" },
  4: { label: "편재", hanja: "偏財" },
  5: { label: "정재", hanja: "正財" },
  6: { label: "편관", hanja: "偏官" },
  7: { label: "정관", hanja: "正官" },
  8: { label: "편인", hanja: "偏印" },
  9: { label: "정인", hanja: "正印" },
};
