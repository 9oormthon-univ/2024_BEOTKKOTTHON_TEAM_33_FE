import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import postLike from "@apis/postLike";

const usePostLike = (setIsLike: React.Dispatch<React.SetStateAction<boolean>>) => {
  return useMutation({
    mutationFn: async (diaryId: number) => await postLike(diaryId),
    onSuccess: () => {
      console.log("Success");
      setIsLike(true);
    },
    onError: (error: AxiosError) => {
      console.log(error);

      toast.error("좋아요 등록에 실패했습니다.\n다시 시도해주세요.");
    }
  });
};

export default usePostLike;
