import type React from "react";
import logos from "./logo.png";
import { FaSearch } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <header className="w-100 d-flex align-items-center justify-content-between gap-2 ">
      <img className="app-logo-h" src={logos} />
      <div className="NavBar-hide d-flex align-items-center">
        <button className="NavBar-Search-icon bg-transparent border-end-0 rounded-0 d-flex align-items-center justify-content-center border-light ">
          <FaSearch />
        </button>
        <input
          type="text"
          placeholder="Search"
          className="border border-start-0 click-border-remove bg-transparent NavBar-Search-input border bg-transparent"
        />
      </div>
      <div className="hide d-flex gap-5 align-items-center justify-content-center ">
        <button className="NavBar-hide Botton-hover-color bg-transparent border-0">Log in</button>
        <button className="NavBar-hide Botton-Animation">Sign up</button>
      </div>

    </header>
  );
};

export default Navbar;
