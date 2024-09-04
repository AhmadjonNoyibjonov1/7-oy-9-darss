import React from "react";
import Logo from "../assets/Movie.svg";
import Avatar from "../assets/Avatar.svg";
import Shape from "../assets/Shape.svg";
import Shape2 from "../assets/Shape2.svg";
import Tv from "../assets/tv.svg";
import Book from "../assets/Bookmark.svg";

function Nav() {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center ">
      <div className="w-24 h-[90vh] bg-gray-800 text-white p-5 py-7 flex flex-col items-center justify-between mt-8 ml-8 rounded">
        <div>
        <div className="flex items-center justify-center">
          <span className="text-2xl font-bold">
            <a href="/">
              <img src={Logo} alt="logi icon" />
            </a>
          </span>
        </div>
        <nav className="flex flex-col items-center mt-10 gap-8">
          <a
            href="#"
            className="flex items-center justify-center hover:bg-gray-700 rounded"
          >
            <img src={Shape} alt="shape icon" className="text-lg" />
          </a>
          <a
            href="#"
            className="flex items-center hover:bg-gray-700 rounded"
          >
            <img src={Shape2} alt="shape2 icon" className="text-lg" />
          </a>
          <a
            href="#"
            className="flex items-center hover:bg-gray-700 rounded"
          >
            <img src={Tv} alt="tv icon" className="text-lg " />
          </a>
          <a
            href="/save"
            className="flex items-center hover:bg-gray-700 rounded"
          >
            <img src={Book} alt="book icon" className="text-lg" />
          </a>
        </nav>
        </div>

        <a href="#">
          <img src={Avatar} alt="avatar icon" className="" />
        </a>
      </div>
    </div>
  );
}

export default Nav;
