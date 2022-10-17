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
      className="flex w-[150px] h-[50px] rounded-lg border-2 pl-2 transition ease-in-out cursor-pointer hover:border-primary-green text-white bg-secondary-black focus:border-primary-green"
    >
      <h1 className="flex items-center justify-center row-span-2 col-span-2 w-fit text-2xl font-bold">{letter}</h1>
      <div className="flex flex-col jusitfy-center items-center mx-auto">
        <div className="flex w-fit font-virgil">
          <span>{picture}</span>
          {letter[0] !== 'X' ? displayExample(example) : displayXExample(example)}
        </div>
        <div className="w-fit font-bold">{translation}</div>
      </div>
    </div>
  );
};
