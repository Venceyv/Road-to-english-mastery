import React, { useEffect } from 'react';
import useDropDown from '../../hooks/useDropDown';

export const useDectectDropdown = (): {
  userRef: React.MutableRefObject<HTMLDivElement>;
  dropdown: boolean;
  toggleUserDropDown: () => void;
} => {
  const { userRef, dropdown, setUserDropDown, toggleUserDropDown } = useDropDown();

  const detectOutsideClick = (event: globalThis.MouseEvent) => {
    const target: HTMLImageElement = event.target as HTMLImageElement;
    if (userRef.current && !userRef.current.contains(event.target as Node) && !(target.id === 'user-img')) {
      setUserDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', (e: globalThis.MouseEvent) => {
      detectOutsideClick(e);
    });
  }, []);

  return { userRef, dropdown, toggleUserDropDown };
};
