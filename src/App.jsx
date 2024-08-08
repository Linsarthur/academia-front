import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aluno from "./pages/Aluno";
import Aula from "./pages/Aula";
import EditarAluno from "./pages/EditarAluno";
import EditarAula from "./pages/EditarAula";
import EditarInstrutor from "./pages/EditarInstrutor";
import Home from "./pages/Home";
import Instrutor from "./pages/Instrutor";
import NovaAula from "./pages/NovaAula";
import NovoAluno from "./pages/NovoAluno";
import NovoInstrutor from "./pages/NovoInstrutor";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/alunos" element={<Aluno />} />
                    <Route path="/alunos/novo" element={<NovoAluno />} />
                    <Route path="/alunos/editar/:id" element={<EditarAluno />} />
                    <Route path="/aulas" element={<Aula />} />
                    <Route path="/aulas/novo" element={<NovaAula />} />
                    <Route path="/aulas/editar/:id" element={<EditarAula />} />
                    <Route path="/instrutors" element={<Instrutor />} />
                    <Route path="/instrutors/novo" element={<NovoInstrutor />} />
                    <Route path="/instrutors/editar/:id" element={<EditarInstrutor />} />
                </Routes>
            </BrowserRouter>
            <Toaster position="bottom-right"/>



        </>
    );
};



