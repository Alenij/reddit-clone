export type Post = {
  id: number;
  user: {
    profilePic: string;
    username: string;
  };
  createdAt: string;
  caption: string;
  image: string;
  votes: number;
  comments: number;
  likes: number;
  suggest: boolean;
};
