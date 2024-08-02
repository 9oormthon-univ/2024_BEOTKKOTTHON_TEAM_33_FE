import postAroundSeniorCenter from "@apis/postAroundSeniorCenter";
import { useQuery } from "@tanstack/react-query";

const useAroundSeniorCenter = (latitude: number, longitude: number) => {
  return useQuery({
    queryKey: ["aroundSeniorCenter"],
    queryFn: async () => {
      return await postAroundSeniorCenter(latitude, longitude);
    },
    enabled: false
  });
};

export default useAroundSeniorCenter;
