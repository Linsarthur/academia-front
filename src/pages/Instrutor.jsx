import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteInstrutor, getInstrutor } from "../api/instrutors";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

function Instrutores() {
  const [instrutores, setInstrutores] = useState(null);

  function carregarInstrutores() {
    getInstrutor().then((dados) => {
      setInstrutores(dados);
    });
  }

  function deletarInstrutor(id) {
    const deletar = confirm("Tem certeza que deseja excluir?")
    if(deletar) {
      deleteInstrutor(id).then((resposta) => {
        toast.success(resposta.message)
        carregarInstrutores()
      })
    }
  }

  useEffect(() => {
    carregarInstrutores();
  }, []);

  return (
    <main className="mt-4 container">
      <h1>Instrutores</h1>
      <Button as={Link} to="/instrutors/novo">
        Adicionar Instrutor
      </Button>
      <hr />
      {instrutores ? (
        <Table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Especialização</th>
              <th>Telefone</th>
              <th>CPF</th>
              <th>CREF</th>
            </tr>
          </thead>
          <tbody>
            {instrutores.map((instrutor) => {
              return (
                <tr key={instrutor.id}>
                  <td>{instrutor.nome}</td>
                  <td>{instrutor.especializacao}</td>
                  <td>{instrutor.telefone}</td>
                  <td>{instrutor.cpf}</td>
                  <td>{instrutor.cref}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => deletarInstrutor(instrutor.id)}>Excluir</Button>
                    <Button size="sm" as={Link} to={`/instrutors/editar/${instrutor.id}`}>Editar</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default Instrutores;