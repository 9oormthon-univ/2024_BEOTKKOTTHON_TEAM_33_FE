export interface DiaryCardProps {
  id: number;
  title: string;
  userName: string;
  likeNumber: number;
  photoUrl: string;
}

export interface NewDiaryCardProps {
  id: number;
  title: string;
  userName: string;
  likeNumber: number;
  photoUrl: string;
  content: string;
  createAt: string;
  profileUrl: string;
}
