import React, { useState, createContext, useContext } from "react";
import NavLinks from "./Navlinks";
export const NavbarContext = createContext();

//Custom HOOK

export const useAppContext = () => useContext(NavbarContext);
const Navbar = () => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;