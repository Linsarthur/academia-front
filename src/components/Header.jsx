import { Link } from "react-router-dom"



export default function Header(){
    return(
      <header className="header w-100 px-3 py-2">
      <nav className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          
        </Link>
        <div className="d-flex gap-5">
          <Link to="/alunos">Clientes</Link>
          <Link to="/instrutors">Pets</Link>
        </div>
      </nav>
    </header>
    )
}