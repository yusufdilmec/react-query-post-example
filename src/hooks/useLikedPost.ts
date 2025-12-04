import {
  useMutation,
  useQueryClient,
  type InfiniteData,
} from "@tanstack/react-query";
import type { Post } from "../types/types";
import { likePostService } from "../services/api";

interface MutationContext {
  previousPosts: InfiniteData<Post[]> | undefined;
}

export const useLikedPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: likePostService,
    onMutate: async ({ id, isLiked }): Promise<MutationContext> => {
      await queryClient.cancelQueries({ queryKey: ["posts"] });

      const previousPosts = queryClient.getQueryData<InfiniteData<Post[]>>([
        "posts",
      ]);

      queryClient.setQueryData<InfiniteData<Post[]>>(["posts"], (oldData) => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          pages: oldData.pages.map((page) =>
            page.map((post) => {
              if (post.id === id) {
                return {
                  ...post,
                  isLiked: isLiked,
                  likes: isLiked ? post.likes + 1 : post.likes - 1,
                };
              }
              return post;
            })
          ),
        };
      });

      return { previousPosts };
    },
    onError: (err, variables, context) => {
      if (context?.previousPosts) {
        queryClient.setQueryData(["posts"], context.previousPosts);
      }
      alert("İşlem başarısız oldu!");
    },
  });
};
