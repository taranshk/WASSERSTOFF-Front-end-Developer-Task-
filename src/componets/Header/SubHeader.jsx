// Importing the React library
import React from "react";

// Importing Logo, SearchBar, Navigation, and Preferences components
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import Navigation from "../Nav/Navigation";
import Preferences from "../Preference/Preferences";

// Defining a constant variable named SubHeader as a functional component
const SubHeader = () => (
    // A header element with a class name "header"
    <header className="header">
      
      {/* Rendering the Logo component */}
      <Logo />
      
      {/* Rendering the SearchBar component */}
      <SearchBar />
      
      {/* Rendering the Navigation component */}
      <Navigation />
      
      {/* Rendering the Preferences component */}
      <Preferences/>
      
    </header>
);

// Exporting the SubHeader component as the default export
export default SubHeader;
