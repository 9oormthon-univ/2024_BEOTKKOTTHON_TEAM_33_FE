import { useSuspenseQuery } from "@tanstack/react-query";
import getImages from "@apis/getImages";

const useImages = () => {
  return useSuspenseQuery({
    queryKey: ["images"],
    queryFn: () => getImages()
  });
};

export default useImages;
