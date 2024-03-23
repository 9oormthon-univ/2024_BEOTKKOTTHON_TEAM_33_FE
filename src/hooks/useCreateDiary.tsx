import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import postDiary from "@apis/postDiary";
import { toast } from "react-hot-toast";
import ContentProps from "@/types/contentProps";

const useCreateDiary = () => {
  return useMutation({
    mutationFn: (content: ContentProps) => postDiary(content),
    onSuccess: (res: any) => {
      console.log("Success");
      localStorage.setItem("diary", JSON.stringify(res.data));
    },
    onError: (error: AxiosError) => {
      console.log(error);

      toast.error("일기 업로드에 실패했습니다.\n다시 시도해주세요.");
    }
  });
};

export default useCreateDiary;
