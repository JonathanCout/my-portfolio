/* eslint-disable react/jsx-no-target-blank */
import { Component } from "react";
import './styles.scss';
export default class Footer extends Component{

    render(){
        return(
            <footer id="contato">
                <a href="https://www.linkedin.com/in/jqc-eng/" target='_blank'><img className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/220/220343.png" alt="LinkedIn" /></a>
                <a href="https://github.com/JonathanCout" target='_blank'><img className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/1051/1051377.png" alt="Github" /></a>
                <a href="https://www.instagram.com/coutjhonny/" target='_blank'><img className="img-fluid" src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png" alt="Instagram" /></a>
                <a href="mailto:jqcouting.eng@gmail.com" target='_blank'><img className="img-fluid" src="./images/email.png" alt="Gmail" /></a>
            </footer>
        )
    }
}