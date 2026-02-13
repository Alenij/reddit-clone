import { posts } from "../data/posts";
import { PostCard } from "./PostCard";

export const PostGrid = () => {
  return (
    <>
      <div>
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};
