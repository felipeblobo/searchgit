import React from 'react';
import { Button, Container, SearchSection, Title } from './styles';

export default function Home() {
  return (
    <Container>
      <Title>Busca de Repositórios por Usuário no GitHub</Title>
      <SearchSection>
        <label htmlFor="search">Usuário GitHub</label>
        <input type="text" name="search" id="search" />
        <Button type="submit">Pesquisar</Button>
      </SearchSection>
    </Container>
  )
}
