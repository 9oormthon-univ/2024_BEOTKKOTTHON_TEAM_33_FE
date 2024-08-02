export interface Card {
  writer: string;
  title: string;
  likeCount: number;
  convertImageUrl: string;
  imageResDtoList: { convertImageUrl: string }[];
  photoUrl: string;
  diaryId: number;
}

export interface NewCard {
  writer: string;
  title: string;
  likeCount: number;
  convertImageUrl: string;
  imageResDtoList: { convertImageUrl: string }[];
  photoUrl: string;
  diaryId: number;
  content: string;
  createAt: string;
  writerPicture: string;
}
