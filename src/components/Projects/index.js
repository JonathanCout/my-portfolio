import { Component } from "react";
import './styles.scss';
export default class Projects extends Component{

    links = [
        {
            img:'./images/task-list.png',
            title:'ToDo List',
            description:'Projeto para gerenciamento de tarefas. Capaz de fazer edições e se utiliza do LocalStorage para armazenar as tarefas inseridas',
            url:'https://jonathancout.github.io/FrontEnd2/Task-List/'
        },
        {
            img:'./images/travel-dog.png',
            title:'Travel Dog',
            description:'Projeto realizado em grupo de uma agência de viagens especializada em permitir viagens com animais de estimação.',
            url:'https://jonathancout.github.io/ProjetoFrontEnd/'
        },
        {
            img:'./images/tip-calculator.png',
            title:'Tip Calculator',
            description:'Projeto oferecido pelo FrontEndMentor, onde o desafio era criar uma calculadora de gorjetas.',
            url:'https://jonathancout.github.io/Front-End-Mentor/tip-calculator-app-main/'
        },
        {
            img:'./images/dark.png',
            title:'Dark Mode',
            description:'Projeto criado em Javascript para implementação do Modo Escuro no navegador',
            url:'https://jonathancout.github.io/FrontEnd2/Dark-Mode/'
        }
    ]
    render(){
        return(
            <div id="display" className="d-flex flex-column align-items-center">
                <h3>Alguns Projetos</h3> 
                <ul id="projetos">
                    {
                    this.links.map(link => {
                        return(
                            <li className="card align-items-center mb-5">
                                <img src={link.img} class="card-img-top" alt={link.title} />
                                <div class="card-body">
                                    <h5 class="card-title">{link.title}</h5>
                                    <p class="card-text">{link.description}</p>
                                    <a href={link.url} class="btn btn-primary">Ir para o site</a>
                                </div>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}