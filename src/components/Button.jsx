import styled from 'styled-components';

const Button = styled.button`
  padding: 0 1rem;
  background-color: var(--colors-ua-base);
  box-shadow: var(--shadow);
  border-radius: var(--radii);
  line-height: 2.5rem;

  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: var(--colors-text);
  cursor: pointer;
`;

export default Button;
