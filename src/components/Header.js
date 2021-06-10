import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
  return(
    <header className="header">
      <h1>Notes</h1>
      <button
        className="save"
        onClick={() =>
          handleToggleDarkMode(
            (prevDarkMode) => !prevDarkMode)}>Toggle Mode</button>
    </header>
  )
}

export default Header;
