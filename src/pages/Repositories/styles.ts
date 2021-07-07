import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 60rem;
  margin-top: 6rem;
`
export const Title = styled.h1`
  margin-bottom: 1rem;
  text-align: center;
  color: #f96604;
`

export const Tr = styled.hr`
  margin: 1rem 0;
`

export const Th = styled.th`
  padding: 0 1rem;
  margin: 2rem 0;
  font-size: 1.2rem;
`

export const Td = styled.td`
 text-align: center;
`

export const Button = styled.button`
  border: none;
  width: 7rem;
  border-radius:10px;
  height: 2rem;
  border: 1px solid #f96604;
  background-color: transparent;
  color: #fff;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  padding: .5rem;
  margin: 2rem;
  align-self: flex-end;
  

  &:hover {
    filter: opacity(.8);
    background-color: #f96604 ;
  }

`