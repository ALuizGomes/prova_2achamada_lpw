import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      // color: #eb144c;
      background: #8ed1fc;
      font-weight: 900;
      padding: 1rem 2rem 2rem;
      text-align: center;
      line-height: 1.5rem;

      &:not(:hover)
    }

    td {
      font-weight: 550;
      text-align: center;
      padding: 1rem 2rem;
      border: 0;
      background: #F0F4C3;
      color: var(--text-body);

    }
    
    // tr {
    //   &:hover{
    //     filter: brightness(0.5);
    //   }
    }

    button[type="button"]{
      width: 100%;
      // padding: 0 1.5rem;
      // height: 4rem;
      // margin-top: 1.5rem;
      background: #F0F4C3;
      color: #fff;
      font-size: 1rem;
      border: 0;
      border-radius: 0.50rem;
      font-weight: 600;

      transition: filter 0.2s;

      &:hover{
          filter: brightness(0.9);
      }
    }
  } 
`