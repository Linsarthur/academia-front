import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAulas, deleteAula } from "../api/aulas";
import Loader from "../components/Loader";
import toast from "react-hot-toast";

export default function Aula() {
    const [aulas, setAulas] = useState(null);

    function carregarAulas() {
        getAulas().then((dados) => {
            setAulas(dados);
        });
    }

    function deletarAula(id) {
        const deletar = confirm("Tem certeza que deseja excluir?");
        if (deletar) {
            deleteAula(id)
                .then((resposta) => {
                    toast.success(resposta.message);
                    carregarAulas();
                });
        }
    }


    useEffect(() => {
        carregarAulas();
    }, []);

    return (
        <main className="mt-4 container">
            <h1>Aulas</h1>
            <Button as={Link} to="/aulas/novo">
                Adicionar Aula
            </Button>
            <hr />
            {aulas ? (
                <Table>
                    <thead>
                        <tr>
                            <th>Aula</th>
                            <th>Data</th>
                            <th>Horário</th>
                            <th>Nível</th>
                        </tr>
                    </thead>
                    <tbody>
                        {aulas.map((aula) => {
                            return (
                                <tr key={aula.id}>
                                    <td>{aula.nomeAula}</td>
                                    <td>
                                    {aula.data
                                        ? new Date(
                                            aula.data + "T00:00:00"
                                        ).toLocaleDateString() :
                                        "-"}
                                    </td>
                                    <td>{aula.horario}</td>
                                    <td>{aula.nivel}</td>
                                    <td>
                                        <Button variant="danger me-2" size="sm" onClick={() => deletarAula(aula.id)}>
                                            Excluir
                                        </Button>
                                        <Button size="sm" as={Link} to={`/aulas/editar/${aula.id}`}>
                                            Editar
                                        </Button>
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

