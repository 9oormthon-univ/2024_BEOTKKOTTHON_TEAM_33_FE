import { useSuspenseInfiniteQuery } from "@tanstack/react-query";

const useSeniorCenterList = () => {
  return useSuspenseInfiniteQuery({
    queryKey: ["seniorCenterList"],
    queryFn: () => {},
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const isLastPage = allPages.length >= lastPage.totalPages;
      if (isLastPage) return undefined;
      return allPages.length + 1;
    },
    select: (data) => data.pages.flatMap((page) => page.item)
  });
};

export default useSeniorCenterList;
