import { Card } from "../components/Card";
import { NavBar } from "../components/NavBar";
import "../styles/projects.css";

export const Projects = () => {
  return (
    <>
      <NavBar />
      <h1 className="title-container">Proyectos</h1>
      <section className="project-container">
        <Card
          name={"Rick and Morty Multiverse"}
          link={"https://rickand-morty-multiverse.vercel.app/"}
          img={"src/img/rick-and-morty.jpg"}
          description={
            "Conoce los personajes del multiverso de esta divertida y profunda serie animada. Conectada a The Rick and Morty API realizada con REACTJS"
          }
        />
        <Card
          name={"Knitting Rows Counter"}
          link={"https://knitting-rows-counter.netlify.app/"}
          img={"src/img/knitting-row.jpg"}
          description={
            "No vuelvas a perder el número de vueltas en tu tejido. Realizada con REACTJS y Hooks básicos como useState"
          }
        />
        <Card
          name={"Freelancer Clone"}
          link={"https://react-freelancer-clon.netlify.app/"}
          img={"src/img/clone.jpg"}
          description={
            "Clon pixel-perfect de una web realizado con REACTJS y Bootstrap"
          }
        />
        <Card
          name={"Ghibli Lovers"}
          link={"https://alesalazard.github.io/Ghibli-Lovers/src/"}
          img={"src/img/studio-ghibli.jpg"}
          description={
            "Enamórate de las películas de Ghibli y vuélvelas a ver muchas veces. Realizado con JS Vanilla"
          }
        />
      </section>
      <section className="project-container">
        <Card
          name={"Bonsai Kingdom"}
          link={"https://alesalazard.github.io/Bonsai-Kingdom/src/index.html"}
          img={"src/img/bonsai.jpg"}
          description={"Validación de tarjetas al instante"}
        />
        <Card
          name={"Markdown Links"}
          link={"https://github.com/alesalazard/md-links"}
          img={"src/img/markdown.jpg"}
          description={"NodeJS CLI para encontrar links rotos en archivos"}
        />
        <Card
          name={"Shop it"}
          link={"https://shop-it-beta.vercel.app/"}
          img={"src/img/shopit.jpg"}
          description={
            "API connection a tienda virtual, realizada en equipo con las súper geniales Laboratorians"
          }
        />
        <Card
          name={"Task List"}
          link={"https://task-list-app-ten.vercel.app/"}
          img={"src/img/tasklist.jpg"}
          description={
            "Nunca vuelvas a olvidar una tarea pendiente. Esta aplicación está hecha con React y se conecta a Firebase"
          }
        />
      </section>
    </>
  );
};
