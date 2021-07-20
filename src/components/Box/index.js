import styled from 'styled-components';

//Componentes sempre comecam com titulo maiusculo
const Box = styled.div`
  background: rgba(0,0,0,0.8);
  border-radius: 8px;

  padding: 16px;

  /* CSS Pré-Pronto */
  margin-bottom: 10px;
  .boxLink {
    font-size: 14px;
    color: #ffffff;
    text-decoration: none;
    font-weight: 800;
  }
  .title {
    font-size: 32px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
  }
  .smallTitle {
    margin-bottom: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 20px;
  }
  hr {
    margin-top: 12px;
    margin-bottom: 8px;
    border-color: transparent;
    border-bottom-color: #ECF2FA;
  }
  input {
    width: 100%;
    background-color: rgba(0,0,0,0.0);
    color: #ffffff;
    border: 0;
    padding: 14px 16px;
    margin-bottom: 14px;
    border-radius: 0px;
    ::placeholder {
      color: #ffffff;
      opacity: 1;
    }
  }
  button {
    border: 0;
    padding: 8px 12px;
    color: #FFFFFF;
    border-radius: 10000px;
    background-color: #6F92BB;
  }
`; 

export default Box;