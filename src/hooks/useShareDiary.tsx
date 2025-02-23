import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import postShareDiary from "@apis/postShareDiary";

const useShareDiary = (
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
  isOn: boolean,
  setIsOn: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return useMutation({
    mutationFn: async (diaryId: number) => await postShareDiary(diaryId),
    onSuccess: () => {
      console.log("Success");
      setIsVisible(false);
      setIsOn(!isOn);
    },
    onError: (error: AxiosError) => {
      console.log(error);

      toast.error("요청에 실패했습니다.\n다시 시도해주세요.");
    }
  });
};

export default useShareDiary;
