import styled from "styled-components";

export const Container = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  height: 50px;
  position: relative;
`

export const Logo = styled.img`
  width: auto;
  height: 30px;
  position: relative;
  top: 0;
  bottom: 0;
  margin: auto 0;
`;

export const SearchBar = styled.input`
  background: rgba(0, 0, 0, .1);
  border-radius: 15px;
  border: none;
  position: relative;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: 35px;
  color: #fff;
  padding: 0 15px;
  transition: .2s ease;

  &::placeholder {
    color: rgba(255,255,255,0.2);
  }

  &:focus, &:hover {
    outline: none;
    background: rgba(0, 0, 0, .2);
  }
`;