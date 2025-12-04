import { useLikedPost } from "../hooks/useLikedPost";
import type { Post } from "../types/types";

interface PostCardProps {
  post: Post;
}

interface HeartIconProps {
  filled: boolean;
}

const HeartIcon: React.FC<HeartIconProps> = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill={filled ? "currentColor" : "none"}
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={`w-7 h-7 transition-all duration-300 ${
      filled
        ? "text-red-500 scale-110"
        : "text-gray-500 group-hover:text-red-400"
    }`}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);


const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const { mutate } = useLikedPost();

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    mutate({ id: post.id, isLiked: !post.isLiked });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden group cursor-pointer">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-5">
        <div className="mb-3">
          <h2 className="text-lg font-bold text-gray-800 line-clamp-1 hover:text-blue-600 transition-colors cursor-pointer">
            {post.title}
          </h2>
          <p className="text-xs text-gray-400 mt-1">12 Dakika önce paylaşıldı</p>
        </div>
        
        <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">
          {post.body}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <button 
            onClick={handleLike}
            className="flex items-center gap-2 group focus:outline-none"
          >
            <div className="p-2 rounded-full bg-gray-50 group-hover:bg-red-50 transition-colors">
               <HeartIcon filled={post.isLiked} />
            </div>
            <span className={`font-semibold text-sm ${post.isLiked ? 'text-red-500' : 'text-gray-500'}`}>
              {post.likes}
            </span>
          </button>
          
          <button className="text-blue-600 hover:text-blue-800 text-sm font-semibold transition-colors">
            Devamını Oku →
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;