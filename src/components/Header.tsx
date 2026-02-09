import { Divider, Input } from "antd";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.png";
import { BellOutlined, MessageOutlined } from "@ant-design/icons";
import searchLeft from "../assets/search-bar-icon-left.png";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import hamburger from "../assets/hamburger.svg";
import stack from "../assets/stack.svg";

function Header() {
  return (
    <>
      <div className=" w-full border-y pb-1 border-gray-300 px-3">
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-5 shrink-0">
            <img
              src={hamburger}
              alt="hamburger-icon"
              className="w-4 mt-1 h-4 block customLg:hidden"
            />
            <img
              src={logo}
              alt="reddit-logo"
              className="md:w-20 md:h-5 hidden md:block"
            />
          </div>
          <div className="flex flex-1 max-w-md w-full p-1 border rounded-full border-orange-400 items-center gap-1 mt-1 ">
            <img
              src={searchLeft}
              alt="search-icon-left"
              className="w-7 h-7 rounded-full"
            />
            <div className="flex-1 min-w-0 flex items-center">
              <Input
                placeholder="Find anything"
                style={{
                  height: 30,
                  outline: "none",
                }}
                className="search-bar justify-between flex-1 min-w-0"
              />
              <Divider vertical />
              <div className="flex">
                <button className="flex items-center gap-1 text-sm pr-2">
                  <SparklesIcon className="w-5 h-5" /> Ask
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 shrink-0">
            <img src={stack} alt="stack" className="w-7 h-7 hidden md:block" />
            <MessageOutlined className="text-base" />
            <p className="text-xs flex gap-1 items-center">
              <PlusCircleIcon className="w-5 h-5" /> Create
            </p>
            <div className="relative">
              <BellOutlined className="text-lg" />
              <span className="flex justify-center items-center absolute -top-1 -right-1 rounded-full w-3 h-3 text-white text-[10px] bg-orange-600">
                3
              </span>
            </div>
            <img src={avatar} alt="user-avatar" className="rounded-full w-7" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
