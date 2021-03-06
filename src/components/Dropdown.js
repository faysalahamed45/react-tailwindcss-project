import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <>
      <div
        className={
          isOpen
            ? "grid grid-row-4 text-center items-center bg-yellow-500"
            : "hidden"
        }
        onClick={toggle}
      >
        <Link className="p-4 hover:bg-yellow-300" to="/">
          Home
        </Link>
        <Link className="p-4 hover:bg-yellow-300" to="/menu">
          Menu
        </Link>
        <Link className="p-4 hover:bg-yellow-300" to="/about">
          About
        </Link>
        <Link className="p-4 hover:bg-yellow-300" to="/contacs">
          Contacs
        </Link>
      </div>
    </>
  );
};

export default Dropdown;
