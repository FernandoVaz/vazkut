import styled from 'styled-components';

const MainGrid = styled.main`
  width: 100%;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  grid-gap: 10px;
  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }
  .profileRelationsArea {
      margin-top: 430px;
      @media(min-width: 860px) {
        margin-top: 0px;
      }
  }
  @media(min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px; 
  }
`;


export default MainGrid;