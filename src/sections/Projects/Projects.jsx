import styles from './ProjectsStyles.module.css';
import plant from '../../assets/762352_cute-flower-png.png';
import todoimg from '../../assets/todoimg.png';
import scrapp from '../../assets/scrapp.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={todoimg}
          link="https://github.com/mateuszdamek/todo-app"
          h3="todo-app"
          p="Tasking App"
        />
        <ProjectCard
          src={plant}
          link="https://github.com/mateuszdamek/plant_watering_app"
          h3="plant-watering-app"
          p="Plant Care App"
        />
        <ProjectCard
          src={scrapp}
          link="https://github.com/mateuszdamek/Scrapp"
          h3="scrapp"
          p="Scrapp in Python"
        />
      </div>
    </section>
  );
}

export default Projects;
