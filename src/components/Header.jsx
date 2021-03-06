import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Container } from './Container';
import { IoMoonOutline, IoMoon } from 'react-icons/io5';

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-bg);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
const Title = styled(NavLink).attrs({
  to: '/',
})`
  text-decoration: none;
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  color: var(--colors-text);
`;
const ModeSwitcher = styled.div`
  font-size: var(--fs-sm);
  font-weight: var(--fw-bold);
  color: var(--colors-text);
  cursor: pointer;
  text-transform: capitalize;
`;
const ThemeText = styled.span`
  margin-left: 0.75rem;
`;

const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === 'light' ? <IoMoonOutline size="14px" /> : <IoMoon size="14px" /> }
            <ThemeText>{theme} theme</ThemeText>
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};

export default Header;
