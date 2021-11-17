import { Component } from "react";
import './styles.scss';

export default class Banner extends Component{

    render(){
        return(
            <div className = 'mainBanner'>
                <div className = 'mainCard'>
                    <img src="./images/perfil.jpeg" alt="Jonathan_perfil" />
                    <div className = 'titleCard'>
                        <h2>Jonathan Coutinho</h2>
                        <p>Sou um desenvolvedor júnior apaixonado pela área e por aprendizado,
                           tenho como foco atual Desenvolvimento Web, e almejo ter expertise tanto em FrontEnd como em BackEnd.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}