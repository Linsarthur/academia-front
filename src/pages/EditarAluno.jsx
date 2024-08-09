import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getAluno, updateAluno } from "../api/alunos";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { Button } from "react-bootstrap";


export default function EditarAluno() {
    const { register, handleSubmit, formState: { errors }, reset, } = useForm();

    const navigate = useNavigate();

    const {id} = useParams();

    function atualizarAluno(data){
        updateAluno(id,data).then((resposta)=>{
            toast.success(resposta.message);
            navigate("/alunos")
        }).catch((err) => {
            toast.error(err.response.data.message)
        })
    }

    function carregarAluno(){
        getAluno(id).then((data)=>{
            reset(data);
        }).catch((err) => {
            navigate("/alunos");
        });
    };

    useEffect(() => {
        carregarAluno();
    }, [])

    return (
        <main className="mt-4 container">
            <h1>Editar Aluno</h1>
            <hr />
            <form onSubmit={handleSubmit(atualizarAluno)}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input type="text" id="nome" className="form-control"
                        {...register("nome", { required: true, maxLength: 200 })}
                    />
                    {errors.nome && (<small className="text-danger">O nome é inválido</small>)}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control" 
                    {...register("email", {required:true, maxLength: 200})}
                    />
                    {errors.email && (<small className="text-danger">O email é inválido!</small>)}
                </div>
                <div>
                    <label htmlFor="telefone">Telefone</label>
                    <input type="tel" id="telefone" className="form-control" 
                    {...register("telefone", {required:true, maxLength: 20})}
                    />
                    {errors.telefone && (<small className="text-danger">O telefone é inválido!</small>)}
                </div>
                <div>
                    <label htmlFor="cpf">Cpf</label>
                    <input type="text" id="cpf" className="form-control"
                        {...register("cpf", { required: true, maxLength: 11 })}
                    />
                    {errors.cpf && (<small className="text-danger">O cpf é inválido!</small>
                    )}
                </div>
                <div>
                    <label htmlFor="dataNasc">Data de Nascimento</label>
                    <input type="date" id="dataNasc" className="form-control" 
                    {...register("dataNasc", {required: true})}
                    />
                    {errors.dataNasc && (<small className="text-danger">A data de nascimento é inválida!</small>)}
                </div>
                <Button variant="info" className="mt-3" type="submit">Cadastrar</Button>
            </form>
        </main>
    )
}