export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  image: string;
  likes: number;
  isLiked: boolean;
}

export interface ApiPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
