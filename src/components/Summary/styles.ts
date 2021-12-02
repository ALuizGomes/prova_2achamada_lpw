import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: -5rem;

  div {
    background: var(--green);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    text-align: center;

    strong {
      margin-top: 2rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
      text-align: center;
    }
  }

`