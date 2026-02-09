import tennis from "../assets/tennis.png";
import igPic from "../assets/ig-screenshoot.jfif";
import downArrow from "../assets/down-arrow.svg";
import upArrow from "../assets/up-arrow.svg";
import comments from "../assets/comment.svg";
import heart from "../assets/heart.svg";
import share from "../assets/share.svg";
import dot from "../assets/dot.svg";
import randomPic from "../assets/random-pic.jfif";
import ayra from "../assets/ayra.jfif";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

function PostsGrid() {
  return (
    <>
      <div className="w-full flex-1 min-w-0 flex flex-col gap-2">
        <div>
          <div className="mx-10">
            <div className="flex items-center justify-between text-[10px]">
              <div className="flex items-center">
                <img src={tennis} alt="tennis" className="w-7 h-7" />
                <p className="flex items-center">
                  r/tennis
                  <img src={dot} alt="dot" className="w-3 h-3" />
                  <span className="text-[rgb(92,108,116)]">3 hr. ago</span>
                </p>
              </div>
              <EllipsisHorizontalIcon className="w-5 h-5" />
            </div>

            <h2 className="text-xs md:text-sm mt-1 ml-2 font-semibold line-clamp-2 md:line-clamp-3">
              Exchange of words between Djokovic and Alcaraz on Instagram:
              "bravo Carlos, little titan" - "Such a good role model for
              everyone! Thank you Titán!"
            </h2>

            <div className="relative w-full p-13 h-133.5 rounded-2xl bg-[#d9dbdb]">
              <img
                src={igPic}
                alt="ig-screenshot"
                className="absolute inset-0 w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
          <div className="flex gap-2 ml-10 mt-3">
            <p className="bg-gray-300 flex rounded-2xl w-20 h-8 items-center justify-center text-xs gap-1">
              <img src={downArrow} alt="down-arrow" className="w-3.5 h-3.5" />
              446
              <img src={upArrow} alt="up-arrow" className="w-3.5 h-3.5" />
            </p>
            <p className="bg-gray-300 flex rounded-2xl w-15 h-8 items-center justify-center text-xs gap-1">
              <img
                src={comments}
                alt="comments-bubble"
                className="w-3.5 h-3.5"
              />
              36
            </p>
            <p className="bg-gray-300 flex rounded-2xl w-12 h-8 items-center justify-center text-xs gap-1">
              <img src={heart} alt="werid-heart" className="w-3.5 h-3.5" />1
            </p>
            <p className="bg-gray-300 flex rounded-2xl w-20 h-8 items-center justify-center text-xs gap-1">
              <img src={share} alt="share-arrow" className="w-3.5 h-3.5" />
              Share
            </p>
          </div>
        </div>

        <hr className="text-gray-100 w-full max-w-2xl mx-auto" />
        <div>
          <div className="mx-10">
            <div className="flex items-center justify-between text-[10px]">
              <div className="flex items-center gap-1">
                <img
                  src={randomPic}
                  alt="random-white-lady"
                  className="w-7 h-7 rounded-full"
                />
                <p className="flex items-center">
                  r/AyraStarrHQ
                  <img src={dot} alt="dot" className="w-3 h-3" />
                  <span className="text-[rgb(92,108,116)] flex items-center">
                    1 day ago <img src={dot} alt="dot" className="w-3 h-3" />{" "}
                    Suggested for you
                  </span>
                </p>
              </div>
              <EllipsisHorizontalIcon className="w-5 h-5" />
            </div>

            <h2 className="text-sm mt-1 ml-2 font-semibold">
              Ayra Starr - Spotify Best New Artist 2026
            </h2>

            <div className="relative w-full p-13 h-133.5 rounded-2xl bg-[#d9dbdb]">
              <img
                src={ayra}
                alt="ayra-starr"
                className="absolute inset-0 w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
          <div className="flex gap-2 ml-10 mt-3">
            <p className="bg-gray-300 flex rounded-2xl w-20 h-8 items-center justify-center text-xs gap-1">
              <img src={downArrow} alt="down-arrow" className="w-3.5 h-3.5" />
              446
              <img src={upArrow} alt="up-arrow" className="w-3.5 h-3.5" />
            </p>
            <p className="bg-gray-300 flex rounded-2xl w-15 h-8 items-center justify-center text-xs gap-1">
              <img
                src={comments}
                alt="comments-bubble"
                className="w-3.5 h-3.5"
              />
              36
            </p>
            <p className="bg-gray-300 flex rounded-2xl w-12 h-8 items-center justify-center text-xs gap-1">
              <img src={heart} alt="werid-heart" className="w-3.5 h-3.5" />1
            </p>
            <p className="bg-gray-300 flex rounded-2xl w-20 h-8 items-center justify-center text-xs gap-1">
              <img src={share} alt="share-arrow" className="w-3.5 h-3.5" />
              Share
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostsGrid;
