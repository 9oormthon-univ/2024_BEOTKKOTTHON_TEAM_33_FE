import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import postUpload from "@apis/postUpload";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { photoURLState } from "@stores/photoURLStore";
import { useRecoilState } from "recoil";

interface responseType {
  convertImageUrl: string;
  imageSequence: number;
}

const useUpload = () => {
  const [, setPhotoURL] = useRecoilState(photoURLState);

  const navigate = useNavigate();

  return useMutation({
    mutationFn: (photos: string[]) => postUpload(photos),
    onSuccess: (res: any) => {
      const photoUrls = res.data.map((photo: responseType) => photo.convertImageUrl);

      setPhotoURL(photoUrls);

      navigate("/writeDiary");
    },
    onError: (error: AxiosError) => {
      console.log(error);

      toast.error("사진 업로드에 실패했습니다. 다시 시도해주세요.");
    }
  });
};

export default useUpload;
