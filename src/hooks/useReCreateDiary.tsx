import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import postReDiary from "@apis/postReDiary";
import { toast } from "react-hot-toast";
import ReContentProps from "@/types/reContentProps";

const useReCreateDiary = () => {
  return useMutation({
    mutationFn: (content: ReContentProps) => postReDiary(content),
    onSuccess: (res: any) => {
      console.log("Success");
      localStorage.setItem("diary", JSON.stringify(res.data));
    },
    onError: (error: AxiosError) => {
      console.log(error);

      toast.error("일기 재생성에 실패했습니다.\n다시 시도해주세요.");
    }
  });
};

export default useReCreateDiary;
