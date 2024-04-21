export interface Card {
  writer: string;
  title: string;
  likeCount: number;
  convertImageUrl: string;
  imageResDtoList: { convertImageUrl: string }[];
  photoUrl: string;
  diaryId: number;
}
