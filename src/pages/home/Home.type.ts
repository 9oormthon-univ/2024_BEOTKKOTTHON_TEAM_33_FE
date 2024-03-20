const texts: string[] = [
  "저는 추억을 남겨주는 해봄이에요.\n이곳에 기록을 쉽게 저장해보세요.",
  "저 여기 있어요!\n언제든지 이야기를 들려주세요.",
  "돌아온 봄,\n 따뜻한 추억을 저와 함께 남겨볼까요?"
];

export const getRandomText = (): string => {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
};
