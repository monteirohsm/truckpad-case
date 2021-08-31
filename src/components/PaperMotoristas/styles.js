import styled from 'styled-components';

export const Container = styled.div`
  .paper-class {
    width: 350px;
    margin: 10px;
    border-radius: 10px;
    border: 1px solid #f9cd00;
  }

  .esquerda {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .conteudo-esquerda {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h4, p {
      color: #f9cd00
    }

    h4 {
      text-transform: uppercase;
    }
  }

  .icons-div {
    display: flex;
    justify-content: space-between;
  }
`;
