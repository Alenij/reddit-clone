import type { Post } from "../interface/post";
import img1 from "../assets/tennis.png";
import igScreenshot from "../assets/ig-screenshoot.jfif";
import randomPic from "../assets/random-pic.jfif";
import ayraPic from "../assets/ayra.jfif";

export const posts: Post[] = [
  {
    id: 1,
    user: {
      profilePic: img1,
      username: "r/tennis",
    },
    createdAt: new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString(), // 3 hours ago
    caption:
      'Exchange of words between Djokovic and Alcaraz on Instagram:"bravo Carlos, little titan" - "Such a good role model for everyone! Thank you Titán!"',
    image: igScreenshot,
    votes: 446,
    comments: 36,
    likes: 1,
    suggest: false,
  },
  {
    id: 2,
    user: {
      profilePic: randomPic,
      username: "r/AyraStarrHQ",
    },
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    caption: "Ayra Starr - Spotify Best New Artist 2026",
    image: ayraPic,
    votes: 46,
    comments: 6,
    likes: 7,
    suggest: true,
  },
];
