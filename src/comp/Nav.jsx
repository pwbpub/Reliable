import React from "react";
// import "./Nav.css";

//Establishes nav items;
//Will be called later under Nav func..."NavItems.map((item) => ( ... "
const NavItems = [
  { id: "home", label: "Home"},
  { id: "services", label: "Services"},
  { id: "contact", label: "Contact"},
];

export default function Nav() {
  return (
    <header className="header">
      <div className="header__content">
        {/* will be changed to logo image later; text for now */}
      <a href="#home" className="header__logo">
        <span className="logo">Reliable Preservation</span>
      </a>

    {/* maps the nav items from the NavItems array above */}
      <nav className="nav">
        <ul className="nav__list">
          {NavItems.map((item) => (
          <li key={item.id} className="nav__item">
            <a href={`#${item.id}`} className="nav__link">
              {item.label}
            </a>
          </li>
          ))}
          </ul>
      </nav>
      </div>
    </header>
  );
}