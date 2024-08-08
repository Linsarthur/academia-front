import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate, useParams  } from "react-router-dom";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { updateAula } from "../api/aulas";
import { getAlunos } from "../api/alunos";
import { getInstrutors } from "../api/instrutors";


export default function EditarAula(){
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const [alunos, setAlunos] = useState(null);

    const [ instrutors, setInstrutors ] = useState(null);

    const { id } = useParams();

    function atualizarAula(data) {
        
        updateAula(data).then((resposta) => {
            toast.success(resposta.message);
            navigate("/aulas");
        }).catch((err) => {
            toast.error(err.response.data.message);
        });
    }

    function carregarAula() {
        getAula(id).then((dados) => {
          reset(dados);
          console.log(dados);
        }).catch((err) => {
          navigate("/aulas");
        });
      }

    function carregarAlunos() {
        getAlunos().then((dados) => {
          setAlunos(dados); 
        }).catch((err) => {
          console.error('Erro ao carregar alunos:', err);
        });
    }

    function carregarInstrutors() {
        getInstrutors().then((dados) => {
          setInstrutors(dados); 
        }).catch((err) => {
          console.error('Erro ao carregar instrutores:', err);
        });
    }

    useEffect(() => {
        carregarAlunos();
    }, []);

    useEffect(() => {
        carregarInstrutors();
    }, []);

    return (
        <main className="mt-4 container">
            <h1>Editar aula</h1>
            <hr />
            <form onSubmit={handleSubmit(atualizarAula)}>
                <div>
                    <label htmlFor="nomeAula">Aula</label>
                    <input
                        type="text"
                        id="nomeAula"
                        className="form-control"
                        {...register("nomeAula", { required: true, maxLength: 130 })}
                    />
                    {errors.nome && (
                        <small className="text-danger">A aula é inválida!</small>
                    )}
                </div>
                <div>
                    <label htmlFor="data">Data</label>
                    <input
                        type="date"
                        id="data"
                        className="form-control"
                        {...register("data", { required: true })}
                    />
                    {errors.data && (
                        <small className="text-danger">A data é inválida!</small>
                    )}
                </div>
                <div>
                    <label htmlFor="horario">Horário</label>
                    <input
                        type="time"
                        id="horario"
                        className="form-control"
                        {...register("horario", { required: true })}
                    />
                    {errors.horario && (
                        <small className="text-danger">O horário é inválido!</small>
                    )}
                </div>
                <div>
                    <label htmlFor="nivel">Nível</label>
                    <select
                        id="nivel"
                        className="form-control"
                        {...register("nivel", { required: true })}
                    >
                        <option value="">Selecione o nível</option>
                        <option value="iniciante">Iniciante</option>
                        <option value="intermediario">Intermediário</option>
                        <option value="avancado">Avançado</option>
                    </select>
                    {errors.nivel && (
                        <small className="text-danger">O nível é inválido!</small>
                    )}
                </div>
                <div>
                    <label htmlFor="alunoId">Nome do aluno</label>
                    <select
                        id="alunoId"
                        className="form-select"
                        {...register("alunoId", { required: true, valueAsNumber: true })}
                    >
                        <option value="">Selecione um aluno</option>
                        {alunos && alunos.map(aluno => (
                            <option key={aluno.id} value={aluno.id}>
                                {aluno.nome} - {aluno.cpf}
                            </option>
                        ))}
                    </select>
                    {errors.alunoId && (
                        <small className="text-danger">Selecione um aluno!</small>
                    )}
                </div>
                <div>
                    <label htmlFor="instrutorId">Nome do instrutor</label>
                    <select
                        id="instrutorId"
                        className="form-select"
                        {...register("instrutorId", { required: true, valueAsNumber: true })}
                    >
                        <option value="">Selecione um instrutor</option>
                        {instrutors && instrutors.map(instrutor => (
                            <option key={instrutor.id} value={instrutor.id}>
                                {instrutor.nome} - {instrutor.cref}
                            </option>
                        ))}
                    </select>
                    {errors.instrutorId && (
                        <small className="text-danger">Selecione um instrutor!</small>
                    )}
                </div>
                <Button variant="info" className="mt-3" type="submit">
                    Atualizar
                </Button>
            </form>
        </main>
    );
}