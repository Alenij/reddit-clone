import {
  CompassOutlined,
  DownOutlined,
  HomeFilled,
  PlusOutlined,
  StarOutlined,
  StockOutlined,
} from "@ant-design/icons";
import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import pencil from "../assets/pencil.svg";
import grid from "../assets/Grid.svg";
import dino from "../assets/offline-dino.jpg";
import game from "../assets/controller.svg";
import jobs from "../assets/jobs.svg";
import sfLogo from "../assets/sf-logo.jfif";
import hamburger from "../assets/hamburger.svg";

export const SideNav = () => {
  return (
    <>
      <div className="hidden customLg:block">
        <nav className="relative flex flex-col p-3 w-full max-w-61 text-[13px] border-r border-gray-200">
          <ul className="flex flex-col list-none">
            <li>
              <button className="bg-[#e5ebee] rounded-lg flex items-center w-53 px-3 py-2">
                <span>
                  <HomeFilled className="mr-2" /> Home
                </span>
              </button>
            </li>
            <li>
              <button className=" nav flex items-center w-53 px-3 py-2">
                <StockOutlined className="mr-3" />
                Popular
              </button>
            </li>
            <li>
              <button className="nav flex items-center w-53 px-3 py-2">
                <CompassOutlined className="mr-2" /> Explore
              </button>
            </li>
            <li>
              <button className="flex items-center w-53 px-3 py-2 gap-1 nav">
                <ChartBarSquareIcon className="w-5 h-5 mr-1" /> All
              </button>
            </li>
            <li>
              <button className="nav flex items-center w-53 px-3 py-2">
                <PlusOutlined className="mr-2 text-base" /> Start a community
              </button>
            </li>
          </ul>

          <hr className="border-gray-300 my-3" />

          <ul className="flex flex-col gap-2">
            <li>
              <button className="text-gray-400 flex items-center w-53 px-3 py-2 justify-between nav">
                GAMES ON REDDIT <DownOutlined />
              </button>
            </li>
            <li>
              <div className="relative flex gap-3 items-center bg-[#ff5700] rounded-xl p-2 w-48">
                <img
                  src={sfLogo}
                  alt="sf-logo"
                  className="w-8 h-8 rounded-full"
                />
                <div>
                  <p className="text-[14px] text-gray-50">Stonefall</p>
                  <p className="text-[12px] text-gray-200">Build a tower</p>
                  <p className="text-[10px] text-gray-300">
                    136K monthly players
                  </p>
                </div>
                <div className="absolute bg-[#ff4500] left-40 bottom-14  rounded-lg px-1.5 text-[12px] text-white">
                  NEW
                </div>
              </div>
            </li>
            <li>
              <button className="flex items-center w-53 px-3 py-2 nav">
                <img src={pencil} alt="pencil-svg" className="w-6 h-6 mr-3" />{" "}
                Pixelary
              </button>
            </li>
            <li>
              <button className="flex items-center w-53 px-3 py-2 nav">
                <img
                  src={grid}
                  alt="wierd-grid-thingy"
                  className="w-6 h-6 mr-3 rounded-lg"
                />
                Blokkit
              </button>
            </li>
            <li>
              <button className="flex items-center w-53 px-3 py-2 nav">
                <img
                  src={dino}
                  alt="offine-dino-icon"
                  className="w-6 h-6 mr-3"
                />
                Offline Dino
              </button>
            </li>
            <li>
              <button className="flex items-center w-53 px-3 py-2 nav">
                <img
                  src={game}
                  alt="game-controller"
                  className="w-5 h-5 mr-3"
                />
                Discover More Games
              </button>
            </li>
          </ul>

          <hr className="border-gray-300 my-3" />

          <ul className="flex flex-col gap-2">
            <li>
              <button className="text-gray-400 flex items-center w-53 px-3 py-2 justify-between nav">
                CUSTOM FEEDS <DownOutlined />
              </button>
            </li>
            <li>
              <button className="flex items-center w-53 px-3 py-2 nav">
                <PlusOutlined className="mr-2 text-lg" /> Create Custom Feed
              </button>
            </li>
            <li>
              <button className="flex items-center w-55 px-3 py-2 nav">
                <img src={jobs} alt="jobs-icon" className="w-5 h-5 mr-3" />
                <p className="flex gap-24">
                  Jobs <StarOutlined />
                </p>
              </button>
            </li>
          </ul>
          <div className="absolute -right-6 top-4 rounded-full border border-gray-500 bg-white p-2 mr-2">
            <img src={hamburger} alt="hamburger-icon" className="w-3 h-3" />
          </div>
        </nav>
      </div>
    </>
  );
};
