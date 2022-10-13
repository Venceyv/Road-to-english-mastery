import { useEffect, FC } from 'react';
import useDropDown from './hooks/useDropDown';
import { NavBar, Card, Banner } from './components';
import { cards } from './data/cards';
import { banner } from './data/banner';
import './App.css';

const App: FC = () => {
  const { userRef, dropdown, setUserDropDown, toggleUserDropDown } = useDropDown();

  const detectOutsideClick = (event: globalThis.MouseEvent) => {
    const target: HTMLImageElement = event.target as HTMLImageElement;
    if (
      userRef.current &&
      !userRef.current.contains(event.target as Node) &&
      !(target.id === 'user-img')
    ) {
      setUserDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', (e: globalThis.MouseEvent) => {
      detectOutsideClick(e);
    });
  }, []);

  return (
    <>
      <NavBar
        userRef={userRef}
        dropdown={dropdown}
        setUserDropDown={setUserDropDown}
        toggleUserDropDown={toggleUserDropDown}
      />
      <div className="flex justify-center bg-primary-black">
        <Banner title={banner.title} hint={banner.hint} />
      </div>
      <div className="flex flex-col justify-start items-center pt-16 h-[calc(100%-56px)] bg-primary-black  ">
        {cards.map((card) => {
          return <Card picture={card.picture} cardInfo={card.cardInfo} />;
        })}
      </div>
    </>
  );
};

export default App;
