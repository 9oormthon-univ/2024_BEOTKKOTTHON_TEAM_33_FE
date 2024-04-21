import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import deleteLike from "@apis/deleteLike";

const useDeleteLike = (setIsLike: React.Dispatch<React.SetStateAction<boolean>>) => {
  return useMutation({
    mutationFn: async (diaryId: number) => await deleteLike(diaryId),
    onSuccess: () => {
      console.log("Success");
      setIsLike(false);
    },
    onError: (error: AxiosError) => {
      console.log(error);

      toast.error("좋아요 취소에 실패했습니다.\n다시 시도해주세요.");
    }
  });
};

export default useDeleteLike;
