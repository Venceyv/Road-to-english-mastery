import { FC, useState } from 'react';
import { Alphabet } from '..';
import { alphabet } from '../../data/alphabet';

const toastMessage = (): JSX.Element => {
  return (
    <div className="fixed flex justify-center items-center top-[58px] right-3 p-2 w-fit h-fit font-bold text-sm rounded-md border-2 text-white border-white bg-secondary-black">
      ~ 急什么，先听完这个嘛 ~
    </div>
  );
};

export const Alphabets: FC = (): JSX.Element => {
  const [isPlaying, setPlaying] = useState<boolean>(false);
  const [isToast, setToast] = useState<boolean>(false);
  return (
    <>
      <div className="grid gap-3 grid-cols-2 grid-flow-row p-5">
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
