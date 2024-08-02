import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import postSeniorCenterList from "@apis/postSeniorCenterList";

const useSeniorCenterList = (searchValue?: string) => {
  return useSuspenseInfiniteQuery({
    queryKey: ["seniorCenterList"],
    queryFn: async ({ pageParam }) => {
      return await postSeniorCenterList(pageParam, searchValue ?? "");
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const isLastPage = allPages.length >= (lastPage.total_count as number);
      if (isLastPage) return undefined;
      return allPages.length + 1;
    },
    select: (data) => {
      const results = data.pages.flatMap((page) => page.result);
      const total_count = data.pages[0].total_count;

      return { results, total_count };
    }
  });
};

export default useSeniorCenterList;
