import React, { useState } from 'react';
import { createContext } from 'react';
const ThemeContext = createContext({
 isClicked: false,
 clickSignUp: false,
 clickVisibleSignUp: false,
 clickVisiblePasswordConfirm: false,
 handleClick: () => {},
 handleClickSignUp: () => {},
 handleVisibleSignUp: () => {},
 handleClickVisiblePasswordConfirm: () => {},
});

const ClickTheme = ({ children }) => {
 const [isClicked, setIsClicked] = useState(false);
 const [clickSignUp, setclickSignUp] = useState(false);
 const [clickVisibleSignUp, setVisibleSignUp] = useState(false);
 const [clickVisiblePasswordConfirm, setClickVisiblePasswordConfirm] = useState(false);
 const handleClick = () => {
    setIsClicked(prevState => !prevState);
 };
 const handleClickSignUp = () => {
   setclickSignUp(state => !state);
};
const handleVisibleSignUp = () => {
   setVisibleSignUp(state => !state);
};
const handleClickVisiblePasswordConfirm = () => {
   setClickVisiblePasswordConfirm(state => !state);
}

 const value = {clickVisiblePasswordConfirm, clickVisibleSignUp, isClicked, clickSignUp, handleClick, handleClickSignUp, handleVisibleSignUp, handleClickVisiblePasswordConfirm };

 return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
 );
};

export { ThemeContext, ClickTheme };
