import React, { ChangeEvent, useState } from "react";
import { Button, Erro, Container, SearchSection, StyledMain, Title } from "./styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer";

export default function Home() {
  const [gitUser, setGitUser] = useState("");
  const history = useHistory();
  const [error, setError] = useState(false);

  function changingUser(event: ChangeEvent<HTMLInputElement>) {
    setGitUser(event.target.value);
  }

  async function gettingRepositoriesFromUser() {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${gitUser}/repos`
      );
      const repositories = response.data;  
      if (repositories.length === 0) {
        setError(true);
        return
      } 
      localStorage.setItem("repositories", JSON.stringify(repositories));

      setError(false);
      history.push('/repositories');

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <StyledMain>
    <Container>
      <Title>Busca de Repositórios por Usuário no GitHub</Title>
      <SearchSection>
        <label htmlFor="search">Usuário GitHub</label>
        <input
          type="text"
          name="search"
          id="search"
          value={gitUser}
          onChange={changingUser}
        />
        <Button onClick={gettingRepositoriesFromUser} type="button">Pesquisar</Button>
      </SearchSection>
     {error ? ( <Erro>O usuário pesquisado não se encontra na  base de dados.</Erro>) : ("")}
    </Container>
    <Footer />
    </StyledMain>
  );
}
