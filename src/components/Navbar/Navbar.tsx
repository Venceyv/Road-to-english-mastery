import { FC } from 'react';
import { useDectectDropdown } from './Navbar.hook';
import { useNavigate } from 'react-router-dom';
import { cards } from '../../data/cards';

export const NavBar: FC = (): JSX.Element => {
  const { userRef, dropdown, toggleUserDropDown } = useDectectDropdown();
  const navigate = useNavigate();

  const onNavigateByMenu = (path: string) => {
    return () => {
      toggleUserDropDown();
      navigate(`road-${path}`);
    };
  };

  return (
    <div className="sticky flex items-center justify-start top-0 flex-1 h-[56px] w-full gap-8 pl-4 pr-2 mx-auto drop-shadow-md z-10 bg-secondary-black">
      <img onClick={() => navigate('/')} src="../../assets/img/image.png" alt="logo" className="w-[56px] h-[56px] cursor-pointer" />
      <div className="flex items-center text-white ">
        <div onClick={() => navigate('/')} className="h-full font-fzf3 font-extrabold text-xl m-2 cursor-pointer">
          老妈の英语之旅
        </div>
      </div>
      <img
        id="user-img"
        className="h-[40px] ml-auto cursor-pointer"
        src="../../assets/img/menu.svg"
        alt="arrow"
        onClick={toggleUserDropDown}
      />

      {dropdown && (
        <div
          ref={userRef}
          className="flex absolute flex-col items-center gap-y-3  w-40 top-[56px] right-[0px] border-[1px] peer-hover:block bg-secondary-black border-zinc-700"
        >
          <ul className="flex flex-col items-start px-[8px] gap-[6px] py-2 w-full">
            {cards.map((card, index) => {
              return (
                <li
                  key={index}
                  onClick={onNavigateByMenu(card.cardInfo.path)}
                  className="font-bold cursor-pointer text-zinc-300 hover:text-primary-green"
                >
                  {card.cardInfo.title}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};
