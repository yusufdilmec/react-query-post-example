import axios from "axios";
import type { ApiPost, Post } from "../types/types";
const API_URL = "https://jsonplaceholder.typicode.com/posts";

const getImage = (id: number) => `https://picsum.photos/id/${id + 10}/200/200`;

interface FetchPostParams {
  page?: number;
}

export const fetchPosts = async ({
  page = 1,
}: FetchPostParams): Promise<Post[]> => {
  const response = await axios.get(`${API_URL}?_page=${page}&_limit=9`);
  return response.data.map((post: ApiPost) => ({
    ...post,
    image: getImage(post.id),
    likes: Math.floor(Math.random() * 100) + 1,
    isLiked: false,
  }));
};

interface LikedPostParams {
  id: number;
  isLiked: boolean;
}

export const likePostService = async ({
  id,
  isLiked,
}: LikedPostParams): Promise<{ id: number; isLiked: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, isLiked: isLiked });
    }, 1000);
  });
};
