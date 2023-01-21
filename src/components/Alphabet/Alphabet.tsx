import { FC, useRef } from 'react';

interface AlphabetProp {
  letter: string;
  picture: string;
  example: string;
  translation: string;
  audio: string;
  isPlaying: boolean;
  setPlaying: (value: boolean) => void;
  setToast: (value: boolean) => void;
}

const displayExample: Function = (example: string): JSX.Element => {
  return <div className="first-letter:text-primary-green">{example}</div>;
};

const displayXExample: Function = (example: string): JSX.Element => {
  return (
    <div className="flex">
      <div>{example.slice(0, -1)}</div>
      <div className="text-primary-green">{example[example.length - 1]}</div>
    </div>
  );
};

export const Alphabet: FC<AlphabetProp> = ({
  letter,
  picture,
  example,
  translation,
  audio,
  isPlaying,
  setPlaying,
  setToast,
}): JSX.Element => {
  const alphabetRef = useRef<HTMLDivElement>(null);

  const onPlayAudio: Function = (): Function => {
    return () => {
      if (!isPlaying) {
        const alphabetAudio = new Audio(audio);
        alphabetAudio.play();
        setPlaying(true);
        alphabetRef?.current?.classList.toggle('border-primary-green');

        alphabetAudio.onloadedmetadata = () => {
          setTimeout(() => {
            setPlaying(false);
            alphabetRef?.current?.classList.toggle('border-primary-green');
          }, alphabetAudio.duration * 1000);
        };
      } else {
        setToast(true);
        setTimeout(() => setToast(false), 2000);
      }
    };
  };

  return (
    <div
      ref={alphabetRef}
      onClick={onPlayAudio()}
      className="flex cursor-pointer rounded-lg border-2 bg-secondary-black px-2 py-1 text-white transition ease-in-out hover:border-primary-green focus:border-primary-green"
    >
      <h1 className="col-span-2 row-span-2 flex w-fit items-center justify-center text-2xl sm:text-3xl md:text-4xl">
        {letter}
      </h1>
      <div className="jusitfy-center mx-auto flex flex-col items-center">
        <div className="flex w-fit font-virgil text-xl md:text-2xl ">
          <span>{picture}</span>
          {letter[0] !== 'X' ? displayExample(example) : displayXExample(example)}
        </div>
        <div className="w-fit text-xl font-bold md:text-2xl ">{translation}</div>
      </div>
    </div>
  );
};
