import { useSuspenseQuery } from "@tanstack/react-query";
import getImages from "@apis/getImages";

const useImages = () => {
  return useSuspenseQuery({
    queryKey: ["images"],
    queryFn: async () => await getImages()
  });
};

export default useImages;
