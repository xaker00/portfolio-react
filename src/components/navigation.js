import { Navbar, Icon, NavItem } from "react-materialize";

export const Navigation = () => {
  return (
    <Navbar
      alignLinks="right"
      brand={
        <a className="brand-logo" href="#">
          Logo
        </a>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavItem href="/about">About</NavItem>
      <NavItem href="/portfolio">Portfolio</NavItem>
      <NavItem href="/contact">Contact</NavItem>
      <NavItem href="/resume">Resume</NavItem>
    </Navbar>
  );
};
