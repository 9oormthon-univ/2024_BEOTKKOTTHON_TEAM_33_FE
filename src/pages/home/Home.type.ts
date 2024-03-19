const texts: string[] = [
  "안녕하세요, 저는 추억을 남겨주는 해봄이에요!",
  "저 여기 있어요! 언제든지 이야기를 들려주세요.",
  "돌아온 봄, 따뜻한 추억을 저와 함께 남겨볼까요?"
];

export const getRandomText = (): string => {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
};
