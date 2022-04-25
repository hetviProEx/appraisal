import styled from "styled-components";
import { size } from "App/device";
import { Theme } from "App/theme";
const Button = styled.button`
  background: ${(props) => props.bgcolor.background};
  color: ${(props) => props.bgcolor.color};
  cursor: pointer;
  margin-top: 10px;
  border: 0;
  display: inline-block;
  font-family: "Rubik", sans-serif;
  position: relative;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  min-width: 80px;
  letter-spacing: 0;
  font-size: 15px;
  text-transform: none;
  font-weight: bold;
  border-radius: 5px;
  transition: all 0.4s ease;
  :hover,
  :focus {
    color: #fff;
    background: ${Theme.baseColor};
    outline: none;
  }
  @media ${size["desktop-sm-max"]} {
    height: 38px;
    line-height: 38px;
    font-size: 14px;
  }
`;

export { Button };
