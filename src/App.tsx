import { FC } from 'react';
import { NavBar, Card, Banner } from './components';
import { cards } from './data/cards';
import { banner } from './data/banner';
import './App.css';

const App: FC = () => {
  return (
    <>
      <NavBar />
      <div className="flex justify-center bg-primary-black">
        <Banner />
      </div>
      <div className="flex flex-col justify-start items-center pt-12 h-[calc(100%-184px)] bg-primary-black  ">
        {cards.map((card) => {
          return <Card picture={card.picture} cardInfo={card.cardInfo} />;
        })}
      </div>
    </>
  );
};

export default App;
