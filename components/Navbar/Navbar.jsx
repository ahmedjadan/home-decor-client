import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import { navItems } from './navItems';
import {
  Container,
  Nav,
  Navigation,
  Menu,
  MenuLinks,
  HumbergurMenu,
  CartLogo,
  Logo,
} from './NavStyle';
function Navbar() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const [mounted, setMounted] = useState(false);

  const closeMenu = () => setClicked(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const toggleMenuIcon = () => {
    setClicked(!clicked);
  };
  const cart = 1;
  return (
    <Container active={clicked}>
      <Nav active={clicked}>
        <Logo>
          <Link href="/">
            <a>Home Decor</a>
          </Link>
        </Logo>
        <Navigation active={clicked}>
          <Menu>
            {navItems?.map((nav, idx) => (
              <MenuLinks current={router.pathname == nav.link} key={idx}>
                <Link href={nav.link} passHref>
                  <a onClick={closeMenu}>{nav.name}</a>
                </Link>
              </MenuLinks>
            ))}
          </Menu>
        </Navigation>
        <CartLogo>
          <Link href="/cart">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: '32px', height: '32px', color: '111' }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              {cart > 0 ? <span>{cart}</span> : ''}
            </a>
          </Link>
        </CartLogo>
        <HumbergurMenu onClick={toggleMenuIcon}>
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: '32px', height: '32px' }}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              {clicked ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              )}
            </svg>
          )}
        </HumbergurMenu>
      </Nav>
    </Container>
  );
}

export default Navbar;
