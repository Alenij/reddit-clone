import dot from "../assets/dot.svg";
import randomPic from "../assets/random-pic.jfif";
import igPic from "../assets/ig-screenshoot.jfif";
import ayra from "../assets/ayra.jfif";

function RecentPosts() {
  return (
    <>
      <div className="bg-gray-100 mt-7 w-[270px] shrink-0 rounded-2xl hidden custom:block">
        <div className="flex justify-between p-3 items-center">
          <h2 className="text-[11px] text-gray-500 font-bold">RECENT POSTS</h2>
          <p className="text-[11px] text-blue-600">Clear</p>
        </div>
        <div className="pl-3">
          <div className="flex gap-2 items-center text-[10px] overflow-hidden">
            <img
              src={randomPic}
              alt="random-pic"
              className="w-7 h-7 rounded-full shrink-0"
            />
            <div className="flex items-center text-[rgb(92,108,116)] truncate">
              <span>r/Music</span>
              <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" />
              <span className="whitespace-nowrap">3y ago</span>
            </div>
          </div>
          <p className="text-gray-500 mt-1 text-xs font-bold">
            Can't enjoy music anymore?
          </p>
          <div className="flex items-center mt-1  text-[10px] text-[rgb(92,108,116)]">
            198 upvotes{" "}
            <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" /> 147
            comments
          </div>
        </div>

        <hr className="text-gray-200 my-2" />

        <div className="pl-3">
          <div className="flex gap-2 items-center text-[10px] overflow-hidden">
            <img
              src={igPic}
              alt="ig-pic"
              className="w-7 h-7 rounded-full shrink-0"
            />
            <div className="flex items-center text-[rgb(92,108,116)] truncate">
              <span>r/WeAreTheMusicMakers</span>
              <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" />
              <span className="whitespace-nowrap">4y ago</span>
            </div>
          </div>
          <p className="text-gray-500 mt-1 text-xs font-bold">
            Spotify just took away almost half of our streams
          </p>
          <div className="flex items-center mt-1  text-[10px] text-[rgb(92,108,116)]">
            58 upvotes{" "}
            <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" /> 15
            comments
          </div>
        </div>

        <hr className="text-gray-200 my-2" />

        <div className="pl-3">
          <div className="flex gap-2 items-center text-[10px] overflow-hidden">
            <img
              src={ayra}
              alt="ayra-starr"
              className="w-7 h-7 rounded-full shrink-0"
            />
            <div className="flex items-center text-[rgb(92,108,116)] truncate">
              <span>r/ProductManagement</span>
              <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" />
              <span className="whitespace-nowrap">3y ago</span>
            </div>
          </div>
          <p className="text-gray-500 mt-1 text-xs font-bold">
            Slack groups to recommend?
          </p>
          <div className="flex items-center mt-1  text-[10px] text-[rgb(92,108,116)]">
            12 upvotes{" "}
            <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" /> 9
            comments
          </div>
        </div>

        <hr className="text-gray-200 my-2" />

        <div className="pl-3">
          <div className="flex gap-2 items-center text-[10px] overflow-hidden">
            <img
              src={randomPic}
              alt="random-pic"
              className="w-7 h-7 rounded-full shrink-0"
            />
            <div className="flex items-center text-[rgb(92,108,116)] truncate">
              <span>r/Music</span>
              <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" />
              <span className="whitespace-nowrap">3y ago</span>
            </div>
          </div>
          <p className="text-gray-500 mt-1 text-xs font-bold">
            Can't enjoy music anymore?
          </p>
          <div className="flex items-center mt-1  text-[10px] text-[rgb(92,108,116)]">
            198 upvotes{" "}
            <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" /> 147
            comments
          </div>
        </div>

        <hr className="text-gray-200 my-2" />

        <div className="pl-3">
          <div className="flex gap-2 items-center text-[10px] overflow-hidden">
            <img
              src={igPic}
              alt="ig-pic"
              className="w-7 h-7 rounded-full shrink-0"
            />
            <div className="flex items-center text-[rgb(92,108,116)] truncate">
              <span>r/WeAreTheMusicMakers</span>
              <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" />
              <span className="whitespace-nowrap">4y ago</span>
            </div>
          </div>
          <p className="text-gray-500 mt-1 text-xs font-bold">
            Spotify just took away almost half of our streams
          </p>
          <div className="flex items-center mt-1  text-[10px] text-[rgb(92,108,116)]">
            58 upvotes{" "}
            <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" /> 15
            comments
          </div>
        </div>

        <hr className="text-gray-200 my-2" />

        <div className="pl-3">
          <div className="flex gap-2 items-center text-[10px] overflow-hidden">
            <img
              src={ayra}
              alt="ayra-starr"
              className="w-7 h-7 rounded-full shrink-0"
            />
            <div className="flex items-center text-[rgb(92,108,116)] truncate">
              <span>r/ProductManagement</span>
              <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" />
              <span className="whitespace-nowrap">3y ago</span>
            </div>
          </div>
          <p className="text-gray-500 mt-1 text-xs font-bold">
            Slack groups to recommend?
          </p>
          <div className="flex items-center mt-1  text-[10px] text-[rgb(92,108,116)]">
            12 upvotes{" "}
            <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" /> 9
            comments
          </div>
        </div>

        <hr className="text-gray-200 my-2" />

        <div className="pl-3">
          <div className="flex gap-2 items-center text-[10px] overflow-hidden">
            <img
              src={randomPic}
              alt="random-pic"
              className="w-7 h-7 rounded-full shrink-0"
            />
            <div className="flex items-center text-[rgb(92,108,116)] truncate">
              <span>r/Music</span>
              <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" />
              <span className="whitespace-nowrap">3y ago</span>
            </div>
          </div>
          <p className="text-gray-500 mt-1 text-xs font-bold">
            Can't enjoy music anymore?
          </p>
          <div className="flex items-center mt-1  text-[10px] text-[rgb(92,108,116)]">
            198 upvotes{" "}
            <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" /> 147
            comments
          </div>
        </div>

        <hr className="text-gray-200 my-2" />

        <div className="pl-3">
          <div className="flex gap-2 items-center text-[10px] overflow-hidden">
            <img
              src={igPic}
              alt="ig-pic"
              className="w-7 h-7 rounded-full shrink-0"
            />
            <div className="flex items-center text-[rgb(92,108,116)] truncate">
              <span>r/WeAreTheMusicMakers</span>
              <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" />
              <span className="whitespace-nowrap">4y ago</span>
            </div>
          </div>
          <p className="text-gray-500 mt-1 text-xs font-bold">
            Spotify just took away almost half of our streams
          </p>
          <div className="flex items-center mt-1  text-[10px] text-[rgb(92,108,116)]">
            58 upvotes{" "}
            <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" /> 15
            comments
          </div>
        </div>

        <hr className="text-gray-200 my-2" />

        <div className="pl-3">
          <div className="flex gap-2 items-center text-[10px] overflow-hidden">
            <img
              src={ayra}
              alt="ayra-starr"
              className="w-7 h-7 rounded-full shrink-0"
            />
            <div className="flex items-center text-[rgb(92,108,116)] truncate">
              <span>r/ProductManagement</span>
              <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" />
              <span className="whitespace-nowrap">3y ago</span>
            </div>
          </div>
          <p className="text-gray-500 mt-1 text-xs font-bold">
            Slack groups to recommend?
          </p>
          <div className="flex items-center mt-1  text-[10px] text-[rgb(92,108,116)]">
            12 upvotes{" "}
            <img src={dot} alt="" aria-hidden="true" className="w-3 h-3" /> 9
            comments
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentPosts;
