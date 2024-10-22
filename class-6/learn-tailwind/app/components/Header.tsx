import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between bg-slate-400 text-white  text-[24px] px-6">
      <div className="text-[40px] font-bold">LOGO</div>

      <div className="flex gap-6 items-center">
        <div>Home</div>
        <div>About us</div>
        <div>Career</div>
        <div>Contact us</div>
      </div>
    </div>
  );
};

export default Header;
