import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPosts } from "../services/api";
import type { Post } from "../types/types";

export const usePosts = () => {
  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts"],
    queryFn: ({ pageParam }) => fetchPosts({ page: pageParam as number }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined;
      return allPages.length + 1;
    },
    staleTime: 1000 * 60 * 2,
  });
};
