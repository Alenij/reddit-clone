import { PostGrid } from "./PostGrid";
import { RecentPosts } from "./RecentPosts";

export const MainContainer = () => {
  return (
    <div className="flex justify-center gap-8 max-w-custom mx-auto customLg:px-4">
      {" "}
      <PostGrid />
      <RecentPosts />
    </div>
  );
};
