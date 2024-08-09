import { Link, NavLink } from "react-router-dom"
import "../styles/Header.css";



export default function Header() {
  return (

    <>
     <header>
      <section className="cabecalho">
      <Link to="/">
      <img src="/acadefit-logo.png" alt="Logo da academia" width={90}/>
      </Link>
      <div className="nav">
      <ul>
        <Link className="nav-link" to="/alunos">Alunos</Link>
        <Link className="nav-link" to="/aulas">Aulas</Link>
        <Link className="nav-link" to="instrutors">Instrutores</Link>
      </ul>
      </div>
      </section>
     </header>






















      {/* <nav class="navbar navbar-expand-lg navbar-custom">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src="acadefit-logo.png" alt="Logo" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/aulas">Aulas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/alunos">Alunos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/instrutors">Instrutores</a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>

  )
}