/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {Component} from 'react';
import './styles.scss';

export default class Header extends Component{

    render(){
        return(
          <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
            <div className="container-fluid">
              <a className="navbar-brand" id="title" href="#">Jonathan Coutinho</a>
              <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="navbar-collapse collapse justify-content-end" id="navbarsExample04">
                <ul className="navbar-nav mb-2 mb-md-0 text-center">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Início</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#projetos">Projetos</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#contato">Contato</a>
                  </li>
                </ul>
              </div>
            </div>
        </nav>
      )
    }
}