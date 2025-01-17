import styled from "styled-components";

export const HeadRow = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  height: 6rem;
  width: 100%;
  background: #ffffff;
`;

export const LogoContainer = styled.img`
  align-items: center;
  padding: 0.3rem;
  height: 4.5rem;
  width: auto;
`;

export const UBAContainer = styled.div`
  text-decoration: none;
  color: #000000;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  height: 4rem;
  width: auto;
  margin: 0.5rem 0 0 0;
  &:hover {
    color: #000000;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const UBATitle = styled.h1`
  align-items: center;
  width: max-content;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const UBASubTitle = styled.h1`
  align-items: center;
  width: max-content;
  font-size: 1rem;
  font-weight: 550;
  margin-bottom: 1rem;
`;
