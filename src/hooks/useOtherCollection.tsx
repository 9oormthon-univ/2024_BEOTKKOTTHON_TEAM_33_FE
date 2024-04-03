import { useQuery } from "@tanstack/react-query";
import getOtherCollection from "@apis/getOtherCollection";
import { OtherContentParams } from "@/types/otherCollectionProps";

const useOtherCollection = (params: OtherContentParams) => {
  const { data } = useQuery({
    queryKey: ["otherCollection", params],
    queryFn: () => getOtherCollection(params)
  });

  return { data };
};

export default useOtherCollection;
