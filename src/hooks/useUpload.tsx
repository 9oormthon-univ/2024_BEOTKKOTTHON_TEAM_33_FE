import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import postUpload from "@apis/postUpload";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const useUpload = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (photos: string[]) => postUpload(photos),
    onSuccess: () => {
      console.log("Success");

      navigate("/writeDiary");
    },
    onError: (error: AxiosError) => {
      console.log(error);

      toast.error("사진 업로드에 실패했습니다. 다시 시도해주세요.");
    }
  });
};

export default useUpload;
