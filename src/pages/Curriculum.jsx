import React from "react";
import { NavBar } from "../components/NavBar";
import "../styles/curriculum.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelopeOpen,
  FaRegFilePdf,
} from "react-icons/fa";

export const Curriculum = () => {
  return (
    <>
      <NavBar />
      <section className="main-section">
        <h1 className="title1">Hablemos sobre Ale</h1>
      </section>
      <section>
        <img src="src/img/ale.jpg" alt="photo" className="me-image" />
        <p>
          Mi camino formal como desarrolladora web comenzó en Backend, donde mi
          “romance” con Python, Java y Android me llevaron a querer conocer más
          del universo Tech. Entonces conocí el verdadero amor: El Frontend, con
          el cual he podido acercarme al complejo pero fascinante funcionamiento
          de la Web desde la perspectiva del usuario y a desplegar la pulsión
          artística que habita en mí y que durante mi vida he buscado expresar
          de diferentes formas. A través de HTML, CSS y JavaScript consigo
          pintar, tejer y transformar el mundo diverso e inclusivo con el que
          sueño.
        </p>
        <p>
          Aunque previamente ejercía como terapeuta ocupacional, mi temprana
          pasión por los computadores y la idea de que con ellos la vida puede
          ser más accesible me ha traído a este reto, el cual estoy disfrutando
          montones porque me ha permitido explorar nuevas habilidades y moverme
          por fuera de mi zona de confort, enfrentándome cada día con las
          Metodologías Ágiles, los retos del trabajo en equipo, y las
          tecnologías que me permiten modelar bellamente la Web.
        </p>
      </section>
      <section>
        <h2 className="curriculum-second-title">Contáctame si quieres!</h2>
        <div className="social">
          <a href="https://github.com/alesalazard">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/alesalazard/">
            <FaLinkedin className="icon" />
          </a>
          <a href="mailto:alxsalazar21@gmail.com">
            <FaEnvelopeOpen className="icon" />
          </a>
          <a
            href="https://drive.google.com/file/d/154UlW896oa_wVZtFG1Qgmnv_Koeu2CGA/view?usp=sharing"
            target="_blank"
          >
            <FaRegFilePdf className="icon" />
          </a>
        </div>
      </section>
    </>
  );
};
