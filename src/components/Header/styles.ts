import styled from 'styled-components'

export const Container = styled.header`
  background: #000;
`

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 1rem 1rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    margin: 10px;
    width: 90px;
    heigt: 40px;
  }

  button {
    font-size: 1rem;
    color: #FFF;
    background: #FFA500;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.50rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.5);
    }
  }
`