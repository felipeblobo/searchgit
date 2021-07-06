import React, { ChangeEvent, useState } from "react";
import { Button, Container, SearchSection, Title } from "./styles";
import axios from "axios";

export default function Home() {
  const [gitUser, setGitUser] = useState<string>("");

  function changingUser(event: ChangeEvent<HTMLInputElement>) {
    setGitUser(event.target.value);
  }

  async function gettingRepositoriesFromUser() {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${gitUser}/repos`
      );
      const repositories = response.data;
      const repositoriesNames: string[] = [];
      repositories.map((repository: any) => {
        repositoriesNames.push(repository.name);
      })     
      localStorage.setItem("repositories", JSON.stringify(repositoriesNames));
    } catch (error) {
      console.error(error);
    }
  }

  return (
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
    </Container>
  );
}
