import logo from "../assets/logo.png";
import {
  ArrowLeft,
  Bell,
  MenuIcon,
  Mic,
  Search,
  Upload,
  User,
} from "lucide-react";
import Button from "../components/Button";
import { useState } from "react";

export default function PageHeader() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className="flex justify-between gap-10 lg:gap-20 pt-2 mb-6 mx-4 items-center">
      <div
        className={` gap-4 items-center flex-shrink-0 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button varient="ghost" size="icons">
          <MenuIcon size={24} />
        </Button>
        <a href="/">
          <img src={logo} className="h-16" alt="logo" />
        </a>
      </div>
      <form
        className={`gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            type="button"
            varient="ghost"
            onClick={() => setShowFullWidthSearch(false)}
            className="flex-shrink-0"
            size="icons"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full h-10 focus:border-blue-500 outline-none"
          />
          <Button className="py-2 rounded-r-full px-4 border-secondary-border border border-l-0 flex-shrink-0">
            <Search size="20" />
          </Button>
        </div>
        <Button type="button" className="flex-shrink-0" size="icons">
          <Mic />
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icons"
          varient="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icons" varient="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icons" varient="ghost">
          <Upload />
        </Button>
        <Button size="icons" varient="ghost">
          <Bell />
        </Button>
        <Button size="icons" varient="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
}
