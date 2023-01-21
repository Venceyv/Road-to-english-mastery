import { FC, useState } from 'react';
import { Alphabet } from '..';
import { alphabet } from '../../data/alphabet';

const toastMessage = (): JSX.Element => {
  return (
    <div className="fixed top-[58px] right-3 flex h-fit w-fit items-center justify-center rounded-md border-2 border-white bg-secondary-black p-2 text-sm font-bold text-white">
      ~ 急什么，先听完这个嘛 ~
    </div>
  );
};

export const Alphabets: FC = (): JSX.Element => {
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const [isToast, setToast] = useState<boolean>(false);
  return (
    <>
      <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-5">
        {alphabet.map((alphabet, index) => {
          return (
            <Alphabet
              key={index}
              letter={alphabet.letter}
              picture={alphabet.picture}
              example={alphabet.example}
              translation={alphabet.translation}
              audio={alphabet.audio}
              isPlaying={isPlaying}
              setPlaying={setPlaying}
              setToast={setToast}
            />
          );
        })}
      </div>
      {isToast && toastMessage()}
    </>
  );
};
