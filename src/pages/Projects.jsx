import { Card } from "../components/Card";
import { NavBar } from "../components/NavBar";
import '../styles/projects.css';

export const Projects = () => {
  return (
    <>
      <NavBar />
      <h1 className='title-container'>Proyectos</h1>
      <section className='project-container'>
        <Card name={"Numero 1"} link={"www.proyecto1.com"} />
        <Card name={"Numero 2"} link={"www.proyecto2.com"} />
        <Card name={"Numero 3"} link={"www.proyecto3.com"} />
        <Card name={"Numero 4"} link={"www.proyecto4.com"} />
      </section>
      <section className='project-container'>
        <Card name={"Numero 5"} link={"www.proyecto5.com"} />
        <Card name={"Numero 6"} link={"www.proyecto6.com"} />
        <Card name={"Numero 7"} link={"www.proyecto7.com"} />
        <Card name={"Numero 8"} link={"www.proyecto8.com"} />
      </section>
    </>
  );
};
