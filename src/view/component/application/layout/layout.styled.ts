import styled from "styled-components";

interface MainContentProps {
  heightOffset: number;
}

const MainContent = styled.main<MainContentProps>`
  min-height: ${({ heightOffset }) => {
    return `calc(100vh - ${heightOffset}px)`;
  }};
`;

export { MainContent };
