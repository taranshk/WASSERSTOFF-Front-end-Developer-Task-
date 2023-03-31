import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Navigation from "../Nav/Navigation";
import Preferences from "../Preference/Preferences";
const SubHeader = () => (
    <header className="header">
      <Logo />
      <SearchBar />
      <Navigation />
      <Preferences/>
    </header>
  );
  export default SubHeader;