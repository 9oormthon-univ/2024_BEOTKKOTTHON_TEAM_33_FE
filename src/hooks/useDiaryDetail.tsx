import { useSuspenseQuery } from "@tanstack/react-query";
import getDiaryDetail from "@apis/getDiaryDetail";

const useDiaryDetail = (diaryDetail: number) => {
  return useSuspenseQuery({
    queryKey: ["diaryDetail", diaryDetail],
    queryFn: async () => await getDiaryDetail(diaryDetail)
  });
};

export default useDiaryDetail;
