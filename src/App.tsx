import { useEffect, FC } from 'react';
import useDropDown from './hooks/useDropDown';
import NavBar from './components/Navbar';
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
      <div className="bg-primary-black h-[calc(100%-56px)]"></div>
    </>
  );
};

export default App;
