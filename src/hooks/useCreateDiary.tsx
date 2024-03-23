import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import postDiary from "@apis/postDiary";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import ContentProps from "@/types/contentProps";

const useUpload = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (content: ContentProps) => postDiary(content),
    onSuccess: () => {
      console.log("Success");

      navigate("/writeDiary");
    },
    onError: (error: AxiosError) => {
      console.log(error);

      toast.error("일기 업로드에 실패했습니다.\n다시 시도해주세요.");
    }
  });
};

export default useUpload;
