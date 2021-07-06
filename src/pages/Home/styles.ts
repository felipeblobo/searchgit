import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 960px;
  margin-top: 6rem;
`

export const Title = styled.h1`
  font-size: 2rem;
`

export const SearchSection = styled.div`
  margin-top: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;

  label {
    margin-right: 1rem;
    font-size: 1.4rem;
  }

  input {
    height: 3rem;
    border-radius: 10px 0px 0px 10px;
    border: none;
    padding: .5rem;
    font-family: 'Poppins', sans-serif;
    font-size: 1.4rem;

    &:focus {
      outline: none;
    }
  }
`

export const Button = styled.button`
  border: none;
  width: 5rem;
  border-radius: 0 10px 10px 0;
  height: 3rem;
  background-color: #f96604;
  color: #fff;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  

  &:hover {
    filter: opacity(.8);
  }

`