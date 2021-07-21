import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  min-height: 55px;
  align-items: center;
  background: ${({ color }) => color};
  padding: 1rem;
  box-shadow: 1px 1px 5px rgb(20, 20, 30);
  border-radius: 20px;
  font-size: 1.2rem;
`;