import { FC } from 'react';
import { useDectectDropdown } from './Navbar.hook';

export const NavBar: FC = () => {
  const { userRef, dropdown, toggleUserDropDown } = useDectectDropdown();

  return (
    <div className="sticky flex items-center justify-start top-0 flex-1 h-[56px] w-full gap-8 pl-4 pr-2 mx-auto drop-shadow-md z-10 bg-secondary-black">
      <img src="../src/assets/img/image.png" alt="logo" className="w-[56px] h-[56px] " />
      <div className="flex items-center text-white ">
        <div className="h-full font-fzf3 font-extrabold text-xl m-2">老妈の英语之旅</div>
      </div>
      <img
        id="user-img"
        className="h-[40px] ml-auto cursor-pointer"
        src="../src/assets/img/menu.svg"
        alt="arrow"
        onClick={toggleUserDropDown}
      />

      {dropdown && (
        <div
          ref={userRef}
          className="flex absolute flex-col items-center gap-y-3  w-40 top-[56px] right-[0px] border-[1px] peer-hover:block bg-secondary-black border-zinc-700"
        >
          <ul className="flex flex-col items-start px-[8px] gap-[6px] py-2 w-full">
            <li className="font-bold cursor-pointer text-zinc-300 hover:text-white ">字母发音の路</li>
            <li className="font-bold cursor-pointer  text-zinc-300 hover:text-white">路还没修好。。。</li>
            <li className="border-style font-bold cursor-pointer text-zinc-300 hover:text-white">路还没修好。。。</li>
          </ul>
        </div>
      )}
    </div>
  );
};