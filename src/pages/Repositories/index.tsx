import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Container, Td, Th, Title } from "./styles";
import { useHistory } from "react-router-dom";

interface Repository {
  name: string;
  language: string;
  stargazers_count: number;
}

export default function Repositories() {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const history = useHistory();

  function backToSearch() {
    history.push('/');
  }

  useEffect(() => {
    let repositoriesStorage = localStorage.getItem("repositories");
    if (repositoriesStorage !== null) {
      const repositoriesStored: Repository[] = JSON.parse(repositoriesStorage);
      setRepositories(repositoriesStored);
    }
  }, []);

  return (
    <Container>
      <Title>Repositórios </Title>
      <table>
        <thead>
          <tr>
            <Th>Nome do Repositório</Th>
            <Th>Linguagem</Th>
            <Th>Estrelas</Th>
          </tr>
        </thead>
        <tbody>
          {repositories.map((repository, index) => (
            <tr key={index}>
              <Td>{repository.name}</Td>
              <Td>{repository.language}</Td>
              <Td>{repository.stargazers_count}</Td>
            </tr>
          ))}
        </tbody>
      </table>
      <Button onClick={backToSearch}>Voltar</Button>
    </Container>
  );
}
