import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;

    body {
      height: 100%;
      margin: 0;
    }

    #__next {
      height: 100%;
    }
  }
`;

export const Main = styled.div`
  height: 100%;
  background: #fffcf1;

  // ::after {
  //   content: '';
  //   display: block;
  //   background-image: linear-gradient(to right top, #AED9AB 0%, #AED9AB 50%, transparent 50%);
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   top: 0;
  //   left: 0;
  // }

  // ::before {
  //   content: '';
  //   display: block;
  //   background-image: linear-gradient(to left bottom,#ffd1b0 0%,#ffd1b0 50%,transparent 50%);
  //   position: absolute;
  //   width: 100%;
  //   height: 100%;
  //   top: 0;
  //   left: inherit;
  // }
`;

interface ContainerProps {
  padding?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 1280px;
  margin-right: auto;
  margin-left: auto;
  ${props => props.padding && `padding: ${props.padding}`}
`;