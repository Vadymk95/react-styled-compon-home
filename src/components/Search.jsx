import React from 'react';
import styled from 'styled-components';
import { IoSearch } from 'react-icons/io5';

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  border-radius: var(--radii);
  margin-bottom: 1rem;
  width: 100%;
  box-shadow: var(--shadow);

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;
const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...',
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--colors-text);
`;

const Search = ({ search, setSearch }) => {
  const handleSeach = (e) => setSearch(e.target.value);

  return (
    <InputContainer>
      <IoSearch />
      <Input value={search} onChange={handleSeach} />
    </InputContainer>
  );
};

export default Search;
