import type React from "react";
import logos from "./logo.png";
import { FaSearch } from "react-icons/fa";
// import "./App.css"

const Navbar: React.FC = () => {
  return (
    <header className="w-100 d-flex align-items-center justify-content-between gap-2 ">
      <img src={logos} />
        <div className="hide d-flex align-items-center">
          <button className="searchIcon d-flex align-items-center justify-content-center ">
            <FaSearch />
          </button>
          <input
            type="text"
            placeholder="Search"
            className="border border-start-0 bg-transparent Search "
          />
        </div>
        <div className="hide d-flex gap-5 align-items-center justify-content-center ">
          <button className="btns1">Log in</button>
          <button className="btns2">Sign up</button>
        </div>
      
    </header>
  );
};

export default Navbar;
