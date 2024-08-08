import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addInstrutor } from "../api/instrutors";
import toast from "react-hot-toast";

function NovoInstrutor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function salvarInstrutor(data) {
    addInstrutor(data).then((resposta) => {
      toast.success(resposta.message)
      navigate("/instrutors")
    }).catch((err) => {
      toast.error(err.response.data.message)
    })
  }

  return (
    <main className="mt-4 container">
      <h1>Novo Instrutor</h1>
      <hr />
      <form onSubmit={handleSubmit(salvarInstrutor)}>
      <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            className="form-control"
            {...register("nome", { required: true, maxLength: 200 })}
          />
          {errors.nome && (
            <small className="text-danger">O nome é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="especializacao">Especialização</label>
          <input
            type="text"
            id="especializacao"
            className="form-control"
            {...register("especializacao", { required: true, maxLength: 200 })}
          />
          {errors.email && (
            <small className="text-danger">A especialização é inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            className="form-control"
            {...register("telefone", { required: true, maxLength: 200 })}
          />
          {errors.telefone && (
            <small className="text-danger">O telefone é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="cpf">CPF</label>
          <input
            type="text"
            id="cpf"
            className="form-control"
            {...register("cpf", { required: true, maxLength: 15 })}
          />
          {errors.cpf && (
            <small className="text-danger">O CPF é inválido!</small>
          )}
        </div>
        <div>
          <label htmlFor="cref">CREF</label>
          <input
            type="text"
            id="cref"
            className="form-control"
            {...register("cref", { required: true, maxLength: 8 })}
          />
          {errors.cref && (
            <small className="text-danger">O CREF é inválido!</small>
          )}
        </div>
        <Button className="mt-3" type="submit">
          Cadastrar
        </Button>
      </form>
    </main>
  );
}

export default NovoInstrutor;
