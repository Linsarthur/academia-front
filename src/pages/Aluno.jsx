import { Button, Table } from "react-bootstrap"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"
import { useEffect, useState } from "react"
import { deleteAluno, getAlunos } from "../api/alunos"
import toast from "react-hot-toast"

export default function Aluno() {
    const [alunos, setalunos] = useState(null)

    function carregarAlunos() {
        getAlunos().then((data) => {
            setalunos(data)
        });
    };

    function deletarAluno(id) {
        const deletar = confirm("Tem certeza que deseja excluir?");
        if (deletar) {
            deleteAluno(id).then((resposta) => {
                toast.success(resposta.message)
                carregarAlunos();
            });
        };
    };

    useEffect(() => {
        carregarAlunos();
    }, []);

    return (
        <main className="mt-4 container">
            <h1>Alunos</h1>
            <Button variant="info" as={Link} to="/alunos/novo">Adicionar Alunos</Button>
            <hr />
            {alunos ? <Table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Cpf</th>
                        <th>Data de nascimento</th>
                    </tr>
                </thead>
                <tbody>
                    {alunos.map((aluno)=> {
                        return(
                            <tr key={aluno.id}>
                                <td>{aluno.nome}</td>
                                <td>{aluno.email}</td>
                                <td>{aluno.cpf}</td>
                                <td>{aluno.dataNasc}</td>
                                <td>
                                    <Button variant="danger me-2" size="sm" onClick={()=> deletarAluno(aluno.id)}>Excluir</Button>
                                    <Button variant="info" size="sm" as={Link} to={`/alunos/editar/${aluno.id}`}>Editar</Button>

                                </td>


                            </tr>
                        )
                    })}



                </tbody>


            </Table> : <Loader />

            }
















        </main>
    )
}