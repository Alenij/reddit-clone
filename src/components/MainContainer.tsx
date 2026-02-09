import PostsGrid from "./PostsGrid";
import RecentPosts from "./RecentPosts";

function MainContainer() {
  return (
    <div className="flex justify-center gap-8 max-w-custom mx-auto customLg:px-4">
      {" "}
      <PostsGrid />
      <RecentPosts />
    </div>
  );
}

export default MainContainer;
